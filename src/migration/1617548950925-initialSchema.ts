import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initialSchema1617548950925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'category',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'uuid',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'langcode',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'iconname',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            }),
            false,
        );

        await queryRunner.createTable(
            new Table({
                name: 'text',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'uuid',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'categoryid',
                        type: 'int4',
                        isNullable: false,
                    },
                    {
                        name: 'original',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'normalized',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
