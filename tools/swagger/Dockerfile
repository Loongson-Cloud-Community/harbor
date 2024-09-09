ARG GOLANG
FROM ${GOLANG}

ARG SWAGGER_VERSION
RUN curl -fsSL -o /usr/bin/swagger http://cloud.loongnix.cn/releases/loongarch64/go-swagger/go-swagger/0.26.0/go-swagger_linux_loongarch64 && chmod +x /usr/bin/swagger
#RUN curl -fsSL -o /usr/bin/swagger https://github.com/go-swagger/go-swagger/releases/download/$SWAGGER_VERSION/swagger_linux_amd64 && chmod +x /usr/bin/swagger

ENTRYPOINT ["/usr/bin/swagger"]
CMD ["--help"]
