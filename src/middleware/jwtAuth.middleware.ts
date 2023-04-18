import { NestMiddleware } from "@nestjs/common/interfaces";
import { Request, Response, NextFunction } from "express";

export class jwtAuth implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.headers);
      /*if(req.headers['api-token'] != 'my-token'){
            throw new BadRequestException('The token does not match');
        } */
        next();
    }
}
