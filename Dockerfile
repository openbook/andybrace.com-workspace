FROM node:latest
EXPOSE 8000
ENV PATH /usr/src/app/node_modules/.bin:/usr/src/app/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY ./workspaces .
COPY ./provisioning/keepalive.sh /tmp/keepalive.sh
VOLUME /usr/src/app
RUN chmod +x /tmp/keepalive.sh
CMD [ "/tmp/keepalive.sh"]