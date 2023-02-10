import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoterIdregistrationModule } from './voter-idregistration/voter-idregistration.module';
import { VoterinfoModule } from './voter-idregistration/voterinfo/voterinfo.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "1234",
      "database": "postgres",
      "entities": [ 
        "dist/**/*.entity{.ts,.js}"
      ],
      "synchronize": true,
      "logging": true
    }
  ), VoterIdregistrationModule, VoterinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
