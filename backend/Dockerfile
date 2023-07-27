FROM node:lts-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
