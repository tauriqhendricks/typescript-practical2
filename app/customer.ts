import { User } from './user';
import * as _ from 'lodash';

export class Customer implements User{
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;
    lastLoginDate: Date;

    firstName(): string {
        if (this.nickname) {
            return this.nickname;
        }
        else {
            let firstName: string[];
            firstName = this.forenames.split(" ");
            return firstName[0];
        }
    }

    fullName(): string {
        let fullname: string;
        let firstName = this.firstName();
        fullname = `${firstName} ${this.surname}`;
        return fullname;
    }
}
