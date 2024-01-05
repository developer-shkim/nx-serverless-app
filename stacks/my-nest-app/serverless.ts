import type { Serverless } from 'serverless/aws';
import { baseServerlessConfiguration } from '../../serverless.base';

const serverlessConfiguration = <Serverless>{
  ...baseServerlessConfiguration,
  service: 'my-nest-app',
  functions: {
    app: {
      handler: 'src/main.handler',
      events: [
        {
          http: {
            method: 'GET',
            path: '/{catchall+}',
          },
        },
      ],
    },
  },
  custom: {
    esbuild: {
      external: [
        'class-validator',
        'class-transformer',
        '@nestjs/websockets/socket-module',
        '@nestjs/microservices/microservices-module',
        '@nestjs/microservices',
      ],
    },
  },
};

module.exports = serverlessConfiguration;
