

export class ResponseDto<T>{

    public code!: number;
    public message!: string;
    public body: T

    constructor(code: number, message: string, initialValue: T){
        this.code = code;
        this.message = message;
        this.body = initialValue;

    }
}


//<T extends object>(dtoClass: new () => T)