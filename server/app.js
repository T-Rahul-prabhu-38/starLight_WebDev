import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


  dotenv.config({path: './.env',});

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;


  const app = express();


 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true})); 


  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  // your routes here

  
  app.get("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found'
    });
  });

  
  
  
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));