FROM node:16

WORKDIR /app

COPY ./app/package*.json .


COPY ./app .
RUN npm install 

CMD ["npm", "start"]
