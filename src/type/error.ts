class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string, validation: any) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }
   
  export default HttpException;