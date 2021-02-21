FROM nginx:latest

RUN apt-get update
RUN apt-get install -y git nodejs npm

COPY . /personal-website
WORKDIR /personal-website

RUN npm i -g npm
RUN npm install
RUN NG_CLI_ANALYTICS=ci npm install -g @angular/cli
RUN ng build

RUN cp -r dist/personal-site/* /usr/share/nginx/html