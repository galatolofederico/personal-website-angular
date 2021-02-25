FROM nginx:latest

RUN apt-get update
RUN apt-get install -y git nodejs npm

RUN mkdir /personal-website
COPY ./package.json /personal-website/package.json
COPY ./package-lock.json /personal-website/package-lock.json

WORKDIR /personal-website

RUN npm i -g npm
RUN npm install
RUN NG_CLI_ANALYTICS=ci npm install -g @angular/cli

COPY . /personal-website
RUN ng build --prod --build-optimizer
RUN ./static-compression.sh

RUN rm -rf /etc/nginx/conf.d
COPY ./nginx-conf /etc/nginx/conf.d