FROM nginx:stable-alpine
COPY dist/  /usr/share/nginx/html/

ADD nginx.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

RUN chmod -R a+rx *
