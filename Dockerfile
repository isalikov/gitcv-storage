FROM node:18

WORKDIR /usr/src
COPY . .

WORKDIR /usr/app

RUN yarn --production

CMD ["yarn", "start"]
