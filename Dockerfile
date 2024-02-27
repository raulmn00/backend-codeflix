FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

ENTRYPOINT ["tail", "-f", "/dev/null"]

CMD ["tail", "-f", "/dev/null"]