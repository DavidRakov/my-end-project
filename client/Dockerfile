FROM node:20-alpine3.19

WORKDIR /app

COPY ./vite-project/package*.json .
RUN npm i

COPY ./vite-project .


EXPOSE 3000

CMD ["npm", "run", "dev"]
