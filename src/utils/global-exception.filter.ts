
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(GlobalExceptionFilter.name);

    catch(error: Error, host: ArgumentsHost) {
        const uuid = uuidv4();
        const detail = Object.entries(error);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        this.logger.error(`Entry [${uuid}] HTTP ${status} --> ${request.method} ${request.url} - ${JSON.stringify(detail)}`, error.stack);

        const summary = {
            uuid,
            statusCode: status,
            timestamp: new Date().toISOString(),
            method: request.method,
            path: request.url,
        };

        response
            .status(status)
            .json(summary);
    }
}
