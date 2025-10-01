module.exports = {
  apps: [
    {
      name: "backend-service",
      script: "pnpm",
      args: "start",
      interpreter: "none", // tells PM2 not to wrap it with node
    },
  ],
};