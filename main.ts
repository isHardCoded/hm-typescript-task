//---------------------------------------------------------------------------------
//Разминка  

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
    name: "Kirill",
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

// Используйте Utility Types для создания Partial и Readonly версий User и Activity
interface IPartialUser {
    id: number;
    name: string;
    email: string;
}

interface IReadonlyActivity {
    id: number;
    name: string;
    description: string;
}

interface IUserActivity {
    id: number;
    name: string;
    description: string;
}

type TypePartialUser = Partial<IPartialUser> // Заполните тип
type TypeReadonlyActivity = Readonly<IReadonlyActivity> // Заполните тип

const partialUser: TypePartialUser = {
    id: 1,
    name: 'Kirill',
    email: 'kirill.shpak@typescript.com',
};
  
const readonlyActivity: TypeReadonlyActivity = {
    id: 1,
    name: 'React',
    description: 'Enjoy React',
};
  
// Типизируйте функцию. userId - число
function getUserActivities(userId: number): Promise<IUserActivity[]> {
    return fetchData<IUserActivity[]>(`/api/activities/${userId}`);
}

// Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
type ActivitiesReturnType = ReturnType<typeof getUserActivities>; // Заполните тип

// Используйте extends в условных типах для создания типа Permissions
type AdminPermissions = { 
    canBanUser: boolean 
};

type BasicPermissions = { 
    canEditProfile: boolean 
};

type UserPermissions<T> = T extends "admin" ? AdminPermissions : BasicPermissions;