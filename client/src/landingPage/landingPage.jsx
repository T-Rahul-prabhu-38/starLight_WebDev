/* eslint-disable react/prop-types */
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import mainImg from "/bg.jpg";
import image1 from "/himachl.jpg";
import image2 from "/varnasi.jpg";
import image3 from "/monument.jpg";
import image5 from "/waterfalls.jpeg";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
        <Schedule />
        <Testimonials /> {/* Include the Testimonials section here */}
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1  text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <>
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage: `url(${mainImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold"
        style={{ opacity }}
      >
        Spot-ly
      </motion.div>
    </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={image2}
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src={image1}
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src={image3}
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src={image5}
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <>
      <section
        id="launch-schedule"
        className="mx-auto max-w-5xl px-4 py-48 text-white"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-4xl font-black uppercase text-zinc-50"
        >
          Launch Schedule
        </motion.h1>
        <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
        <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
        <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
        <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
        <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
        <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
        <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
        <Link to="/LoginSignupForm">
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300">
            Take me to the future
          </button>
        </Link>
      </section>
    </>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-50">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-50">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-zinc-950 text-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 lg:columns-3 lg:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="mb-8 sm:break-inside-avoid">
              <div className="relative bg-zinc-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <blockquote className="text-white">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-white">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
