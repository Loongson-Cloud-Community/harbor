ARG GOLANG
FROM ${GOLANG}

ARG SWAGGER_VERSION
RUN curl -fsSL -o /usr/bin/swagger https://github.com/Loongson-Cloud-Community/go-swagger/releases/download/v0.26.1/swagger-linux-loongarch64

ENTRYPOINT ["/usr/bin/swagger"]
CMD ["--help"]
