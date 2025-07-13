
import { PORT } from '../mjs/env.js';
import { createApp } from '../mjs/server.js';

const isDev = process.env.NODE_ENV !== 'production';







const start = async () => {
  const app = await createApp(isDev);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

start();
