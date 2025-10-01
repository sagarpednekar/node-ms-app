#!/bin/bash
cd /home/ubuntu/app || exit

# Pull latest code
git pull origin main

# Install dependencies
pnpm install --prod

# Build (if you have a build step)
pnpm run build

# Restart PM2
pm2 restart backend-service || pm2 start ecosystem.config.js
