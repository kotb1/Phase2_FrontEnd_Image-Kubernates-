FROM node:14-alpine

RUN mkdir -p /home/node/app &&\
 chown -R node:node /home/node/app
WORKDIR /home/node/app

RUN chgrp -R 0 /home/node/app &&\
 chmod -R g+rwX /home/node/app

COPY package*.json /home/node/app/
USER 1000
RUN npm install

COPY --chown=node:node . /home/node/app
EXPOSE 3000
CMD ["npm", "start"]