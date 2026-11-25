const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL; // Ejemplo: https://tu-portafolio.onrender.com

// Middleware para evitar que el navegador guarde en caché HTML viejo
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

// Servir archivos estáticos (HTML, CSS, JS, imágenes)
app.use(express.static(path.join(__dirname), { etag: false, maxAge: 0 }));

// Endpoint de salud / ping
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'active', timestamp: new Date().toISOString() });
});

// Ruta principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor de portafolio corriendo en puerto ${PORT}`);

  // Bot interno keep-alive (para que Render no se duerma si se define APP_URL)
  if (APP_URL) {
    console.log(`🤖 Bot Keep-Alive activado para: ${APP_URL}`);
    const client = APP_URL.startsWith('https') ? https : http;
    
    // Ping cada 10 minutos (600,000 ms) antes del timeout de 15 min de Render
    setInterval(() => {
      client.get(`${APP_URL}/health`, (res) => {
        console.log(`[Keep-Alive Ping] Status: ${res.statusCode} a las ${new Date().toLocaleTimeString()}`);
      }).on('error', (err) => {
        console.error(`[Keep-Alive Error]: ${err.message}`);
      });
    }, 10 * 60 * 1000);
  } else {
    console.log('ℹ️ Para activar el bot de auto-ping en Render, agrega la variable de entorno APP_URL con la URL de tu app.');
  }
});