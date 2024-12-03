FROM node:20.10.0

WORKDIR /app
COPY . .

RUN npm install --force
RUN npm run build

EXPOSE 6080

CMD ["npm", "run", "start"]
