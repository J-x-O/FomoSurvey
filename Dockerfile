FROM node AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY ./ngnix.conf /etc/nginx/conf.d/default.conf