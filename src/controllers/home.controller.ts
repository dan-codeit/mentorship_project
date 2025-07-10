import { Request, Response } from 'express';
export default async function getData(req: Request, res: Response){
res.send("Loading...")
}

