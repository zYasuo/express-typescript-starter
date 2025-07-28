import { Request, Response, NextFunction } from 'express';


export function notFoundRouteHandler(req: Request, res: Response, next: NextFunction) {
  const error = new Error('Not Found');

  return res.status(404).json({
    message: error.message,
    status: 404,
    path: req.originalUrl
  });
}