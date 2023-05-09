FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /app

ADD . /app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt