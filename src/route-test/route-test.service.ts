import { Injectable } from '@nestjs/common';

@Injectable()
export class RouteTestService {
  getTest(): string {
    return 'Route Test Service is working!';
  }

  getName(name: string): string {
    return `Hello ${name}!`;
  }
}
