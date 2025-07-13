import { createApp, isDev, PORT } from "../mjs/server.js";

const app = await createApp(isDev);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
