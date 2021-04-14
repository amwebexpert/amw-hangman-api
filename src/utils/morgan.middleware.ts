import * as morgan from 'morgan';

morgan.token('param', function (req: any, res: any, param: string) {
  return req.params[param];
});

morgan.token('isOAuthRequest', function (req: any, res: any) {
  if (req.headers['authorization']) {
    return 'with auth';
  } else {
    return 'anonymous';
  }
});

// Build the morgan middleware
const morganMiddleware = morgan(
  // Define message format string (this is the default one).
  // The message format is made from tokens, and each token is
  // defined inside the Morgan library.
  // You can create your custom token to show what do you want from a request.
  ':method :url - :isOAuthRequest status :status, took :response-time ms :remote-addr :user-agent', {
  skip: (req, res) => req.method === 'OPTIONS'
}
);

export default morganMiddleware;
