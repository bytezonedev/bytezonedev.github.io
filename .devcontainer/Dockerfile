ARG VARIANT=22-bookworm
FROM mcr.microsoft.com/devcontainers/javascript-node:1-${VARIANT}

RUN apt-get -y update \
 && DEBIAN_FRONTEND=noninteractive apt-get -y install --no-install-recommends \
     bind9-dnsutils \
     inetutils-ping \
     moreutils \
 && rm -rf /var/lib/apt/lists/*

RUN su node -c "npm install -g imagemin-cli imagemin-pngquant"
