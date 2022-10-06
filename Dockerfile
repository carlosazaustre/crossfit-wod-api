FROM node:alpine

RUN mkdir /crossfit-wod-api

WORKDIR /crossfit-wod-api

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]