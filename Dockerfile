FROM node:alpine as builder

WORKDIR /usr/src/app

ARG REACT_APP_BASE_URL

ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

COPY package.json .

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html