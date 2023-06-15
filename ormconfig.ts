import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export default {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true, //['warn', 'error'],
  synchronize: false,
  migrations: ['dist/src/database/migrations/*.{ts,js}'],
  // These two lines have been added:
  factories: ['src/database/factories/**/*{.ts,.js}'],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
};
