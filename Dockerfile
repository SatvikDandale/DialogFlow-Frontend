FROM node:12-alpine
WORKDIR /
COPY package.json ./
RUN npm install
RUN npm install http-server -g
COPY . ./
RUN npm run build
CMD http-server build -p $PORT