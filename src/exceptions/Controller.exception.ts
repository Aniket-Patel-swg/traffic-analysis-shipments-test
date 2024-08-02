export class ValidationException extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.name = "ValidationException";
    }
}

export class ControllerException extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.name = "ControllerException";
    }
}