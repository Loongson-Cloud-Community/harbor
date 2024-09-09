ARG harbor_base_image_version
ARG harbor_base_namespace
#FROM lcr.loongnix.cn/library/node:20.8 as nodeportal

#WORKDIR /build_dir

#ARG npm_registry=https://registry.npmmirror.com

#COPY ./api/v2.0/swagger.yaml /build_dir/swagger.yaml
#COPY src/portal /build_dir

#ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com

#RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8D69674688B6CB36 && apt update && \
#	apt install -y build-essential
#ENV NPM_CONFIG_REGISTRY=${npm_registry}
#RUN npm config set registry "https://registry.npmmirror.com" && npm install --unsafe-perm
#RUN rm -rf node_modules && npm config set registry "https://registry.npmmirror.com" && npm config set fetch-retry-maxtimeout 60000 \
#	&& npm config set fetch-retry-mintimeout 20000 \
#	&& npm config set fetch-retry-factor 20 
#RUN npm install --unsafe-perm --max-old-space-size=1024
#RUN npm install --max-old-space-size=1024
#RUN npm install -g npm@10.8.3
#RUN npm run generate-build-timestamp
#RUN node --max_old_space_size=2048 'node_modules/@angular/cli/bin/ng' build --configuration production
#RUN npm install js-yaml@4.1.0 \
#    && node -e "const yaml = require('js-yaml'); const fs = require('fs'); const swagger = yaml.load(fs.readFileSync('swagger.yaml', 'utf8')); fs.writeFileSync('swagger.json', JSON.stringify(swagger));"

#COPY ./LICENSE /build_dir/dist

#RUN cd app-swagger-ui && npm install --unsafe-perm
#RUN cd app-swagger-ui && npm run build

FROM ${harbor_base_namespace}/harbor-portal-base:${harbor_base_image_version}

COPY html /usr/share/nginx/html
#COPY --from=nodeportal /build_dir/dist /usr/share/nginx/html
#COPY --from=nodeportal /build_dir/swagger.json /usr/share/nginx/html
#COPY --from=nodeportal /build_dir/app-swagger-ui/dist /usr/share/nginx/html

VOLUME /var/cache/nginx /var/log/nginx /run

STOPSIGNAL SIGQUIT

HEALTHCHECK CMD curl --fail -s http://localhost:8080 || curl -k --fail -s https://localhost:8443 || exit 1
#USER nginx
CMD ["nginx", "-g", "daemon off;"]

