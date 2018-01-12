FROM node:8.9.3-alpine as builder
WORKDIR /build

COPY package.json /build/package.json
COPY package-lock.json /build/package-lock.json
RUN npm install

COPY tsconfig.json /build/tsconfig.json
COPY tslint.json /build/tslint.json
COPY src /build/src
RUN npm run build

FROM node:8.9.3-alpine
WORKDIR /app

#copy the build artifacts to the final image
COPY --from=builder /build/dist /app/dist
COPY --from=builder /build/package.json /app/package.json
COPY --from=builder /build/package-lock.json /app/package-lock.json
#install production dependencies
RUN npm install --only=production
ENV LISTEN_PORT=80
EXPOSE $LISTEN_PORT
ENTRYPOINT ["npm", "start"]