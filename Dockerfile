FROM node AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node
ENV NODE_ENV production
ENV ORIGIN feelies.website
ENV BODY_SIZE_LIMIT 100000000
USER node
WORKDIR /app
COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .

EXPOSE 3000
CMD ["node", "build"]
