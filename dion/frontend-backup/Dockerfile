FROM node:20

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
