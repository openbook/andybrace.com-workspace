FROM node:latest
EXPOSE 8000
ENV PATH /usr/src/app/node_modules/.bin:/usr/src/app/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY web/package.json .
RUN yarn
COPY ./web .
COPY ./provisioning/keepalive.sh /tmp/keepalive.sh
VOLUME /usr/src/app
RUN chmod +x /tmp/keepalive.sh
CMD [ "/tmp/keepalive.sh"]