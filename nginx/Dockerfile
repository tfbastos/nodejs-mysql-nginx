FROM nginx:1.25.2-alpine-slim

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

RUN apk update && apk add bash

CMD ["nginx", "-g", "daemon off;"]