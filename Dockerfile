FROM node:22.1.0 as builder

WORKDIR '/app'
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:dev"]


