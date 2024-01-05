# 로컬에서 동작 확인

### serverless nest app

- `npx nx run my-nest-app:serve --stage=local`
- http://localhost:3000/local/api/my-nest-lib

### serverless app

- `npx nx run hello-stack:serve --stage=local`
- http://localhost:3000/local/hello

# 명령어

### 코드 생성 시 사용한 코드

- `nx g serverless <STACK_NAME>`: 스택 생성
- `nx g @nx/node:lib --skipBabelrc --tags lib libs/<LIBRARY_NAME>`: 라이브러리 생성

### 실행

- ./project.json 기반으로 명령어가 동작합니다.
- `npx nx run <STACK_NAME>:build --stage=local`: sls package
- `npx nx run <STACK_NAME>:serve --stage=local`: sls offline start
