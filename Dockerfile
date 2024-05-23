FROM node:22.1.0 as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]

