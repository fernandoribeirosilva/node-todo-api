import { Request, Response } from 'express';
import { Todo } from '../models/todo';

export const all = async (req: Request, res: Response) => {
   let list = await Todo.findAll();
   res.status(200).json({ list });
}

export const add = async () => {

}

export const update = async () => {

}

export const remove = async () => {

}