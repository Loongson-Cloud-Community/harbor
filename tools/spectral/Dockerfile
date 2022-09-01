ARG GOLANG
FROM ${GOLANG}

ARG SPECTRAL_VERSION
RUN apt update && apt install -y npm && \
    npm install -g yarn --registry https://registry.npm.taobao.org && \
    yarn global add @stoplight/spectral-cli@6.0.0

ENTRYPOINT ["/usr/local/bin/spectral"]
CMD ["--version"]
