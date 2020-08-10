import { User } from './user';
import { Customer } from './customer';

export class SalesRep implements User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;
    customers: Customer[];

    firstName(): string {
        let firstName: string[];
        firstName = this.forenames.split(" ");
        return firstName[0];
    }

    fullName(): string {
        let fullname: string;
        let firstName = this.firstName();
        fullname = `${firstName} ${this.surname}`;
        return fullname;
    }
}