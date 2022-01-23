# Init/Set up Step
FROM node:17.2.0-alpine AS setup
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY  --chown=node:node package.json package-lock.json ./
RUN npm ci --only=production


# Rebuild source coude when cache changes
FROM node:17.2.0-alpine AS build
WORKDIR /app
COPY . .
COPY --from=setup /app/node_modules ./node_modules
RUN npm run build


# Result Image, and put command to run nextjs
FROM node:17.2.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]