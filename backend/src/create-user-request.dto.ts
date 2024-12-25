import { ApiProperty } from "@nestjs/swagger";

//create class with email and pass
export class CreateUserRequestDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}
