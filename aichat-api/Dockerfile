FROM node:24-alpine

# -----------------------------
# aichat-api
# -----------------------------
WORKDIR /workspace/api

# 종속성 파일 복사
COPY ./package*.json ./

# 종속성 설치
RUN npm install -g nodemon
RUN npm install

# 애플리케이션 소스 복사
COPY . .