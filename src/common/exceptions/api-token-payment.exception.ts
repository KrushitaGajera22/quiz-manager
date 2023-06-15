import { HttpException, HttpStatus } from "@nestjs/common";

export class ApiTokenPaymentException extends HttpException {
    constructor() {
        super('Forbidden', HttpStatus.FORBIDDEN)
    }
}