FROM alpine:latest

# Pinning to your current version
ARG PB_VERSION=0.36.9

RUN apk add --no-cache unzip ca-certificates openssl wget

# Download the exact Linux binary for v0.36.9
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Copy your Turkish slug logic into the container
COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# Start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]