## Running

```shell
# prisma의 schema를 기반으로 prisma client를 생성한다.
yarn prisma generate

# prisma의 schema를 기반으로 연결된 데이터베이스에 테이블을 생성한다.
yarn prisma db push

# 연결된 데이터베이스의 테이블을 바탕으로 prisma의 schema를 생성한다.
yarn prisma db pull
