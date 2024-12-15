#STAGE 1
FROM node:23.4.0 AS build
WORKDIR /user/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:latest AS ngi

COPY --from=build /user/src/app/dist/electronic-journal /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
