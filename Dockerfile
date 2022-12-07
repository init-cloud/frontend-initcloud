FROM node:alpine as builder

WORKDIR /usr/src/app

ARG REACT_APP_BASE_URL
ARG REACT_APP_LOCAL_BASE_URL

ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}
ENV REACT_APP_LOCAL_BASE_URL=${REACT_APP_LOCAL_BASE_URL}

COPY package.json .

RUN npm install

COPY ./ ./

FROM nginx

COPY --from=builder /usr/src/app /usr/share/nginx/app
