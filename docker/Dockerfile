ARG NEXT_PUBLIC_REDIRECT_URI
ARG DISABLE_SSO=0

FROM node:16-alpine as build_server

ENV DISABLE_SSO=$DISABLE_SSO

RUN apk update && apk add make

# Move the utility, client, and server files
WORKDIR /build/server
COPY ./server/package.json ./server/yarn.lock /build/server/
RUN yarn install --immutable --immutable-cache

# Build the server
COPY ./server /build/server
RUN make -B build

FROM node:16-alpine as build_client

ENV NEXT_PUBLIC_REDIRECT_URI=$NEXT_PUBLIC_REDIRECT_URI
ENV DISABLE_SSO=$DISABLE_SSO

WORKDIR /build/client
COPY ./client/package.json ./client/yarn.lock /build/client/
RUN yarn install --immutable --immutable-cache

# Build the client
COPY ./client /build/client
COPY ./server/src/api /build/server/src/api
COPY --from=build_server /build/server/nexus-schema.graphql /build/server/nexus-schema.graphql
RUN rm -f /build/client/.env && yarn export

FROM node:16-alpine

ENV DISABLE_SSO=$DISABLE_SSO

RUN apk update && apk add nginx
VOLUME [ "/etc/ssl" ]
COPY ./docker/nginx/proxy.conf /etc/nginx/proxy.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/default.conf /etc/nginx/sites-enabled/default

RUN chmod 777 -R /usr/local
RUN chmod 777 -R /var/
RUN mkdir -p /run/nginx && chown node:node /run/nginx
RUN su node -c "npm install -g pm2"

COPY ./docker/entrypoint.sh /app/entrypoint.sh

ENV PATH "/usr/local/bin:$PATH"
RUN mkdir /app/server /app/client && chown -R node:node /app
USER node

# Move files for server
WORKDIR /app/server
COPY --chown=node:node ./server/package.json ./server/yarn.lock /app/server/
COPY --chown=node:node ./server/prisma /app/server/prisma
COPY --chown=node:node --from=build_server /build/server/dist /app/server/dist
RUN yarn install --immutable --immutable-cache --production

# Move files for client
WORKDIR /app/public
COPY --chown=node:node --from=build_client /build/client/out /app/public

# Extra files for Nexus typing
COPY --chown=node:node ./server/src/nexus /app/server/src/nexus
COPY --chown=node:node ./server/src/api /app/server/src/api
COPY --chown=node:node ./server/src/generated /app/server/src/generated

WORKDIR /app
CMD ["/app/entrypoint.sh"]
