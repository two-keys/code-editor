FROM node:14-alpine
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]