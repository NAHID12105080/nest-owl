import { Controller, Get } from '@nestjs/common';
import { RouteTestService } from './route-test.service';

@Controller('route-test')
export class RouteTestController {
  constructor(private readonly routeTestService: RouteTestService) {}
  @Get()
  getTest(): string {
    return this.routeTestService.getTest();
  }
}
