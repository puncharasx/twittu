import  {Request, Response, NextFunction} from "express";
import HttpException from '../type/error';

const errorHandler = (err: HttpException ,req: Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Someting went wrong";
    res
    .status(status)
    .json({
        status: status,
        message: message,
    })

}

export default errorHandler