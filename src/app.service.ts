import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(): string {
    return 'pong';
  }

  pong(): string {
    return 'ping';
  }

  dummyEnvs(): Record<string, string> {
    return {
      DUMMY_ENV_1: process.env.DUMMY_ENV_1 || 'not-set',
      DUMMY_ENV_2: process.env.DUMMY_ENV_2 || 'not-set',
    }
  }
}
