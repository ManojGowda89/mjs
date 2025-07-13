import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import router from './main.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isDev = process.env.NODE_ENV !== 'production';
const app = express();
app.use(morgan('dev'));
const start = async () => {
  let vite;

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: path.resolve(__dirname, '../app'),
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, '../public')));
  }

  // ✅ API route must come before fallback
  app.use('/api', router);

  // ✅ Fallback for frontend routes
  app.use('*', async (req, res) => {
    const indexHtmlPath = isDev
      ? path.resolve(__dirname, '../app/index.html')
      : path.resolve(__dirname, '../public/index.html');

    let html = await fs.readFile(indexHtmlPath, 'utf-8');

    if (isDev && vite) {
      html = await vite.transformIndexHtml(req.originalUrl, html);
    }

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  });

 
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

start();
