// Определите интерфейс для пользователя
interface IUser {
    id: number;
    name: string;
    email: string;
}

// Определите интерфейс для активности пользователя
interface IActivity {
    userId: number;
    activity: string;
    timestamp: Date;
}

type TypeUser = {
    id: number,
    name: string,
}

let user: TypeUser = {
    id: 1,
    name: "John",
}

console.log(user)

// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      return await response.json() as Promise<T>;
    } 
    catch (error) {
      throw error;
    }
}