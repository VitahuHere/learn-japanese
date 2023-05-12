FROM node as builder

WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . .
CMD ["npm", "run", "build"]

FROM scratch as export
COPY --from=builder /app/dist /var/www/learnjpvitah/dist