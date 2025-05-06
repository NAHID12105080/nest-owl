import { Module } from '@nestjs/common';
import { RouteTestController } from './route-test.controller';
import { RouteTestService } from './route-test.service';

@Module({
  controllers: [RouteTestController],
  providers: [RouteTestService],
})
export class RouteTestModule {}
