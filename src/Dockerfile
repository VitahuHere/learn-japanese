FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /app

ADD . /app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt