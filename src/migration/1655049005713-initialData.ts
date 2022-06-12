import { MigrationInterface, QueryRunner } from "typeorm"

export class initialData1655049005713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                -- Text to guess - english solar system planets
                INSERT INTO text (uuid, categoryid, original, normalized)
                VALUES
                    ('d0f2c87e-a7a4-458f-8764-dda7c87ff3ab', 5, 'Mercury', 'MERCURY'),
                    ('6b8c9209-f769-445d-bc9b-02de73f8151e', 5, 'Venus', 'VENUS'),
                    ('932b7152-cedc-4c4d-be1d-af74c1a19fcc', 5, 'Earth', 'EARTH'),
                    ('45ff0a83-2eec-46dc-bc9e-0b7a6fc0002b', 5, 'Mars', 'MARS'),
                    ('3529fd12-c6f7-4462-9367-287a04f2569c', 5, 'Jupiter', 'JUPITER'),
                    ('3d8e40e4-6d4b-4597-8c1b-92614c3f7da7', 5, 'Saturn', 'SATURN'),
                    ('bdc16329-26f7-41c3-b516-3a85003f0300', 5, 'Uranus', 'URANUS'),
                    ('202e3f7d-3d14-4035-a808-b8b8aaebc533', 5, 'Neptune', 'NEPTUNE');
            `);
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
