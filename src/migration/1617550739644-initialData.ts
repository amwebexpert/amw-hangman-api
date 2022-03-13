
import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1617550739644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            -- Text to guess
            DELETE from text where id in (34, 35);
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
