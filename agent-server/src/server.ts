import app from "./app.js";

console.log("server.ts loaded");

const port = Number(process.env.PORT || 10000);

console.log("About to listen on port", port);

app.listen(port, "0.0.0.0", () => {
  console.log(`Agent server running on http://0.0.0.0:${port}`);
});