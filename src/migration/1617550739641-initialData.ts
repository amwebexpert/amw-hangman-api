import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1617550739641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            -- Categories
            INSERT INTO category (uuid, langcode, name, iconname)
            VALUES
                ('580b0004-d581-49d1-9c84-bddffdb5f3fd', 'fr', 'Animaux', 'animals'),
                ('64d28a1e-24cf-40f7-a6f1-3a76fd534639', 'fr', 'Transports', 'transports'),
                ('f11c8483-41b9-4dfb-85b5-c54ad3ecd962', 'fr', 'Couleurs', 'colors'),
                ('a9f9307d-31f1-422d-ba8d-5cdd3309e0aa', 'en', 'U.S. state names', 'geography'),
                ('1ce6872f-aef1-4083-b5de-f6bfcf4abebf', 'en', 'Solar system planets', 'planets'),
                ('f424fbe0-5b8f-4b51-aa98-1310184900de', 'en', 'Countries', 'countries');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
