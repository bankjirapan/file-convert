FROM node:20-buster-slim
WORKDIR /self-file-convert

COPY . .

RUN npm install

CMD ["npm","start"]