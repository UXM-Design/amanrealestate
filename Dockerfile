FROM oven/bun

WORKDIR /app

COPY package.json bun.lockb /app/

RUN bun install

COPY . /app

RUN bun run build

EXPOSE 3000

CMD ["bun", "start"]