ARG PORT=3000

# Development
FROM node:12.16.1-alpine AS development
ARG PORT
ENV PORT ${PORT}
ENV NODE_ENV development
ARG PORT_DEBUG=9229
EXPOSE ${PORT} ${PORT_DEBUG}
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
USER node
CMD [ "npm", "run", "start:watch" ]

# Production
FROM development AS production
ARG PORT
ENV PORT ${PORT}
ENV NODE_ENV production
EXPOSE ${PORT}
CMD [ "node", "index.js" ]
