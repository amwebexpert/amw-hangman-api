import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Category } from "./categories/category.entity";
import { envUtils } from "./utils/environment-utils";

export const databaseConfigs: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST_NAME || 'localhost',
    port: +process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'hangman',
    entities: [Category],
    synchronize: false,
    migrationsTableName: 'migration_table',
    migrations: ['dist/migration/*.js'],
    migrationsRun: true,
    ssl: envUtils.isProd(),
    extra: {
      ssl: envUtils.isProd() ? { rejectUnauthorized: false } : null,
    },
    cli: {
      migrationsDir: 'migration'
    }
  };
  