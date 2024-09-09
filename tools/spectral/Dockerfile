ARG GOLANG
FROM ${GOLANG}

ARG SPECTRAL_VERSION
#RUN apt update &7 apt install -y --no-install-recommends curl gcc g++ make python3 && \
#	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash && \
#	source ~/.bashrc && \
#	nvm install 20 && \
#	node -v && \
#	npm -v
RUN apt update && apt install -y --no-install-recommends wget git curl xz-utils libatomic1 gnupg dirmngr ca-certificates && \
	rm -rf /var/lib/apt/lists/* && \
	curl -fsSL -o /usr/local/node.tar.xz http://cloud.loongnix.cn/releases/loongarch64/node/v16.20.2/node-v16.20.2-linux-loong64.tar.xz && \
	cd /usr/local && tar xJf  node.tar.xz -C /usr/local --strip-components=1 --no-same-owner && \
	rm /usr/local/node.tar.xz && ln -s /usr/local/bin/node /usr/local/bin/nodejs &&\
	wget https://github.com/yarnpkg/yarn/releases/download/v1.22.19/yarn-v1.22.19.tar.gz \
	&& tar xf yarn-v1.22.19.tar.gz && mv yarn-v1.22.19 yarn && rm yarn-v1.22.19.tar.gz;
ENV PATH=/usr/local/yarn/bin:/usr/local/node/bin:$PATH
#	node --version \
#	&& npm --version
#RUN npm install -g @stoplight/spectral-cli
RUN yarn global add @stoplight/spectral-cli
#RUN git clone --depth 1 -b v6.1.0 https://github.com/stoplightio/spectral && cd spectral && yarn && yarn build \
#    && yarn global add @stoplight/spectral-cli

ENTRYPOINT ["/usr/local/bin/spectral"]
CMD ["--version"]
