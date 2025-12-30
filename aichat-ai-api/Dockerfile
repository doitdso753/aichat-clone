FROM python:3.11-slim

# -----------------------------
# aichat-ai-api
# -----------------------------
WORKDIR /workspace/ai-api

# 필요한 패키지 설치
RUN apt update && apt install -y \
    curl \
    bash \
    && rm -rf /var/lib/apt/lists/*

# uv 설치
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# /root/.local/bin을 PATH 최우선 영역에 추가
ENV PATH="/root/.local/bin/:$PATH"
# 패키지 설치 시 .pyc(바이트코드) 미리 컴파일
ENV UV_COMPILE_BYTECODE=1
# 패키지 설치 시 파일 처리 방식 지정 => 실제 파일 복사
ENV UV_LINK_MODE=copy
# dev dependency 설치 차단
ENV UV_NO_DEV=1

# pyproject.toml uv.lock 복사
COPY ./pyproject.toml uv.lock ./

# 가상 환경에 패키지 설치
RUN uv venv
RUN uv sync --frozen

# 애플리케이션 소스 복사
COPY . .