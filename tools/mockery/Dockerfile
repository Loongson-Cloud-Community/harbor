ARG GOLANG
FROM ${GOLANG}

ARG MOCKERY_VERSION

# https://github.com/docker-library/golang/issues/225
ENV XDG_CACHE_HOME /tmp
ENV GO111MODULE auto

RUN mkdir -p /tmp/mockery-${MOCKERY_VERSION} && \
    	curl -fsSL http://10.130.0.107:7050/loongarch64/vektra/mockery/2.42.2/mockery_2.42.2_Linux_loong64.tar.gz | tar -xz -C /tmp/mockery-${MOCKERY_VERSION} && \
    	mv /tmp/mockery-${MOCKERY_VERSION}/mockery /usr/local/bin && \
    	chmod +x /usr/local/bin/mockery && \
    	rm -rf /tmp/mockery-${MOCKERY_VERSION}
