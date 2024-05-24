FROM node:20.9.0-alpine as builder
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start:prod"]

