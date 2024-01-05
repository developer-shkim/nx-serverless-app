import { APIGatewayProxyHandler } from 'aws-lambda';
import { helloLib } from 'hello-lib';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const result = helloLib();

  return {
    statusCode: 200,
    body: result,
  };
};
