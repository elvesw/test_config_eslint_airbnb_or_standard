import { Request, Response } from 'express';
import data from '@config/data.json';
import User from '@models/User';

const users = data;
let idMax :number = Math.max(...users.map((u) => u.id));

class UsersController {
  index(request:Request, response:Response) {
    const { name } = request.query;
    if (name) {
      const filtered = users.filter((u) => u.name.includes(name as string));
      return response.json(filtered);
    }
    return response.json(users);
  }

  show(request:Request, response:Response) {
    const { id } = request.params;
    const user = users.find((u) => u.id === Number(id));
    if (!user) {
      return response.status(400).json({ error: 'user not found' });
    }
    return response.json(user);
  }

  store(request:Request, response:Response) {
    const {
      name, email, birthYear,
    } = request.body;
    if (!name || !email || !birthYear) {
      return response.status(400).json({ error: 'incomplete data' });
    }
    let user = new User();
    idMax += 1;
    const id = idMax;
    user = {
      id, name, email, birthYear,
    };
    users.push(user);
    return response.json(user);
  }
}
export default UsersController;
