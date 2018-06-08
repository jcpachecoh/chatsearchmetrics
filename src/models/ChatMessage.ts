export class ChatMessage {
    id: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string = '', messages: string = '', createdAt: Date = new Date(), updatedAt: Date = new Date);
}