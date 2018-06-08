export class NetworkError {
    stack?: any;
    statusCode: number;
    message: string;
    name: string;

    constructor() {
        this.stack = '';
        this.statusCode = 200;
        this.name = '';
        this.message = '';
    }
}