import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import { MapsModule } from './maps/maps.module';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    DatabaseModule,
    MapsModule,
    BlocksModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
