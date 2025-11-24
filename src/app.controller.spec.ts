import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [ConfigModule.forRoot()]
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
      expect(true).toBe(true);
    }
  )})

  describe("Should show dummy envs", () => {
    it('Should return dummy env 1 value', () => {
      expect(process.env.DUMMY_ENV_1).toBe('THIS IS ENV 1');
    })

    it('Should return dummy env 2 value', () =>{
      expect(process.env.DUMMY_ENV_2).toBe('THIS IS ENV 2');
    })
  })

}); 
