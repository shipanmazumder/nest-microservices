import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: Record<string, unknown>) {
    console.log('handleUserCreated-COMMUNICATIONS ', data);
  }
}
