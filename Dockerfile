# build environment
FROM node:16 as build
ARG BUILD_ENV=production

WORKDIR /app
COPY package.json ./
COPY yarn.lock* ./
#RUN npm install -g yarn
RUN yarn install
COPY . ./
COPY env.${BUILD_ENV}.local .env
RUN yarn build:$BUILD_ENV

# production environment
FROM nginx:stable
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY etc/nginx/nginx-docker.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]