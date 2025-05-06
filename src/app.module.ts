import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouteTestModule } from './route-test/route-test.module';

@Module({
  imports: [RouteTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
