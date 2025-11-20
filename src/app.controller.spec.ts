import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('ping', () => {
    it('should return "pong" when ping is called', () => {
      expect(appController.ping()).toBe('pong');
    });
  });

  describe('pong', () => {
    it('should return "ping" when pong is called', () => {
      expect(appController.pong()).toBe('ping');
    });
  });

  describe('game session', () => {
    it('should return "pong" when ping is called', () => {
      expect(appController.ping()).toBe('pong');
    });

    it('should return "ping" when pong is called', () => {
      expect(appController.pong()).toBe('ping');
    });
  });

  describe('Is gonna be an error', () => {
    it('Error will not pass', () => {
      expect(true).toBe(false);
    }
  )})
}); 
