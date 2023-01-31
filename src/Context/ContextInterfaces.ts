import { ReactNode } from "react";

interface IValues {
    getUser(data: IUser): void;
    user: IUser;
}

interface IUser{
    address: string,
    login: string, 
    fullName: string,
    balance: number,
    role: number
}
interface IProps{
    children: ReactNode;
}

export type {
    IValues,
    IUser,
    IProps
}