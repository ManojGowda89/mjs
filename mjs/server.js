import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();    
import router from '../server/main.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createApp = async (isDev = true) => {
  const app = express();
  app.use(morgan('dev'));

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

  // API routes
  app.use('/api', router);

  // Fallback
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

  return app;
};
