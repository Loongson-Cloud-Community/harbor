ARG GOLANG
FROM ${GOLANG}

ARG MOCKERY_VERSION

# https://github.com/docker-library/golang/issues/225
ENV XDG_CACHE_HOME /tmp

RUN mkdir -p /tmp/mockery-${MOCKERY_VERSION} && \
    curl -fsSL https://github.com/Loongson-Cloud-Community/mockery/releases/download/v2.7.4/mockery_2.7.4_loongarch64.tar.gz | tar -xz -C /tmp/mockery-${MOCKERY_VERSION} && \
    mv /tmp/mockery-${MOCKERY_VERSION}/mockery /usr/local/bin && \
    chmod +x /usr/local/bin/mockery && \
    rm -rf /tmp/mockery-${MOCKERY_VERSION}
