FROM node:slim as builder

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80