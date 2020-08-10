export interface User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;

    /*this method will return the nickname if it exists. If not it will return the first
    name from the forenames. For instance if the user's forenames are John Edward, this
    method will return John.*/
    firstName(): string;
    
    /*this method will return the firstName and surname, NOT the forenames and
    surname.*/
    fullName(): string;
}
