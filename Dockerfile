FROM node:22.1.0 as builder

WORKDIR '/app'
COPY package*.json .
RUN npm install

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:dev"]


