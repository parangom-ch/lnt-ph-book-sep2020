
export interface IContact {

    id: number;
    name: string;
    email: string;
    phone: number;
}

export class Contact implements IContact {
    id: number;
    name: string;
    email: string;
    phone: number;
}
