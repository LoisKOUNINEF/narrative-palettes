#!/bin/bash

docker build --platform linux/amd64 -t ghcr.io/${REPO_LOWER}:${GITHUB_SHA} -f ./tools/deployment/Dockerfile .
docker push ghcr.io/${REPO_LOWER}:${GITHUB_SHA}