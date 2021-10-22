FROM node:14-alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 5000
CMD ["npm", "run", "start"]
