import { Test, TestingModule } from '@nestjs/testing';
import { RouteTestController } from './route-test.controller';

describe('RouteTestController', () => {
  let controller: RouteTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteTestController],
    }).compile();

    controller = module.get<RouteTestController>(RouteTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
