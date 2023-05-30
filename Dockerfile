FROM node:alpine3.17

WORKDIR /app

ENV PORT=3000

COPY app/package*.json ./

RUN npm install

COPY app .

EXPOSE $PORT

CMD  ["node", "server.js"]