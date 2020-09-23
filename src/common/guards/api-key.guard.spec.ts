import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyGuard } from './api-key.guard';

describe('ApiKeyGuard', () => {
  let apiKeyGuard: ApiKeyGuard;

  beforeEach( async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiKeyGuard],
      providers: [
        Reflector, ConfigService
      ]
    }).compile();

    apiKeyGuard = module.get<ApiKeyGuard>(ApiKeyGuard);
  });

  it('should be defined', () => {
    expect(apiKeyGuard).toBeDefined();
  });
});
