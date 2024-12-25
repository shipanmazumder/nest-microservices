//create envent class with email
export class CreateUserEvent {
    constructor(
        public readonly email: string
    ) { }
}