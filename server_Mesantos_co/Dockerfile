FROM node:latest

WORKDIR /mesantos_co_app/backend/server

COPY . /mesantos_co_app/backend/server

EXPOSE 8082

RUN npm install

# RUN npm run migrate:latest && npm run knex seed:run

CMD ["npm", "start"]