export class ChatMessage {
    id: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, message: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.message = this.message;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}