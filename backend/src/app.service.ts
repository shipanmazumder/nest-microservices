import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  constructor(
    @Inject('COMMUNICATION_SERVICE') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientProxy,
  ) {

  }
  private readonly users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  createUser(user: any) {
    this.users.push(user);
    this.communicationClient.emit('user_created', new CreateUserEvent(user.email));
    this.analyticsClient.emit('user_created', new CreateUserEvent(user.email));
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
