import { useState, useEffect } from "react";

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // You'll need to replace this with your API key from OpenCage
  const OPENCAGE_API_KEY = "d09be71f59114b5ea7ac9a7dd7d4968e";

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Get address using OpenCage Geocoding API
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`
          );

          const data = await response.json();

          if (data.results && data.results.length > 0) {
            setLocation({
              coords: { latitude, longitude },
              address: data.results[0].formatted,
            });
          }

          setLoading(false);
        } catch (e) {
          setError("Error fetching location details", e.message);
          setLoading(false);
        }
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>Loading location...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      {location && (
        <>
          <h3>Your Location:</h3>
          <p>Latitude: {location.coords.latitude}</p>
          <p>Longitude: {location.coords.longitude}</p>
          <p>Address: {location.address}</p>
        </>
              
      )}


    </div>
  );
};

export default UserLocation;
