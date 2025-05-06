import { Test, TestingModule } from '@nestjs/testing';
import { RouteTestService } from './route-test.service';

describe('RouteTestService', () => {
  let service: RouteTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteTestService],
    }).compile();

    service = module.get<RouteTestService>(RouteTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
