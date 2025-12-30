FROM python:3.11-slim

# -----------------------------
# aichat-ai-api
# -----------------------------
WORKDIR /workspace/ai-api

# requirements.txt 복사
COPY ./requirements.txt .

# 필요한 패키지 설치
RUN apt update && apt install -y \
    bash \
    && rm -rf /var/lib/apt/lists/*

# pip 업그레이드 및 Python 패키지 설치
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# 애플리케이션 소스 복사
COPY . .