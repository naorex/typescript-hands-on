FROM node:25.8.1-bookworm-slim

RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    git \
    vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV PATH="/root/.local/bin:${PATH}"

WORKDIR /workspace

CMD ["bash"]