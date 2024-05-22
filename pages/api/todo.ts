import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@/types";

export default function handler (req: NextApiRequest, res: NextApiResponse){
    switch (req.method) {
        case 'GET':
            return getTodos(req, res)
        default:
            res.status(405).end()
            break
    }
}

const todos: Todo[] = [
    {
      Id: '1',
      toDoTitle: 'Go to Gym',
      toDoCategory: 'Health',
      toDoCompleted: false
    },
    {
      Id: '2',
      toDoTitle: 'Study for exam',
      toDoCategory: 'Education',
      toDoCompleted: false
    },
    {
      Id: '3',
      toDoTitle: 'Code',
      toDoCategory: 'Life',
      toDoCompleted: true
    },
  ]

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json({todos})
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error})
    }
}


