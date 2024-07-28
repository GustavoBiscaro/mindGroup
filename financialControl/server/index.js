const express = require('express');
const cors = require('cors');
const app = express();

// ROUTES
const UserRoutes = require('../server/ROUTES/UserRoutes');
// JSON RESPONSE
app.use(express.json());

// CORS
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

const allowedOrigins = ['http://localhost:3001', 'http://localhost:5173'];

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
      // Permitir requisições sem origem (como Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
  
  // Middleware para definir os cabeçalhos CORS
  app.use(function (req, res, next) {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  

// PUBLIC FOLDER - IMAGES
app.use(express.static('public'));

// ROUTES
app.use('/users', UserRoutes)

port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

