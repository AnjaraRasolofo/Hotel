FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5175

CMD ["npm", "run", "dev", "--", "--host"]

