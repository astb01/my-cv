FROM node:10-alpine

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

ARG ORIGINS
ENV ORIGINS ${ORIGINS}

ENV PORT 5000

WORKDIR /usr/app/sample-site

COPY package*.json ./

RUN npm install && npm cache verify

COPY . ./

EXPOSE ${PORT}

CMD [ "npm", "start" ]