import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_ADDON_HOST,
      port: parseInt(process.env.POSTGRESQL_ADDON_PORT),
      username: process.env.POSTGRESQL_ADDON_USER,
      password: process.env.POSTGRESQL_ADDON_PASSWORD,
      database: process.env.POSTGRESQL_ADDON_DB,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    PostModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
