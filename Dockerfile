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

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

COPY ./00-init.sh /docker-entrypoint.d/00-init.sh
COPY --from=builder /usr/src/app /usr/share/nginx/app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]