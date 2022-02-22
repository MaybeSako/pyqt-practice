FROM selenium/standalone-chrome:3.141.59 

WORKDIR /usr/src/app

COPY package*.json ./

USER root

RUN curl -SL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

RUN npm install

COPY . .

CMD npm start