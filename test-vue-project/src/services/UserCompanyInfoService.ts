import axios from 'axios'

export interface User {
  id: number;
  name: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default class UserService {
  private static apiUrl = 'https://jsonplaceholder.typicode.com/users'

  static async getUsers (): Promise<User[]> {
    const response = await axios.get<User[]>(this.apiUrl)
    return response.data
  }
}
