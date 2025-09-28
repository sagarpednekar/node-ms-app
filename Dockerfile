# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# ensure corepack/pnpm is the latest version
RUN corepack enable && corepack prepare pnpm@latest --activate

# copy lockfile and package.json files
COPY package.json pnpm-lock.yaml ./
# install dependencies
RUN corepack prepare pnpm@latest --activate &&  pnpm install --frozen-lockfile

# copy rest and build

COPY tsconfig*.json ./
COPY . .
RUN pnpm build

# Stage 2: runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# activate corepack and pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# copy production files from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]