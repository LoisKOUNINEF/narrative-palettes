#!/bin/bash
set -e

# Render tools/docker/Dockerfile and nginx.conf from their templates (nutin docker feature)
node tools/docker/scripts/validate-docker.js

docker build --platform linux/amd64 -t ghcr.io/${REPO_LOWER}:${GITHUB_SHA} -f ./tools/docker/Dockerfile .
docker push ghcr.io/${REPO_LOWER}:${GITHUB_SHA}
