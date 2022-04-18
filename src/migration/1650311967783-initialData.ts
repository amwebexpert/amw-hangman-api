import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1650311967783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        -- Text to guess
        INSERT INTO text (uuid, categoryid, original, normalized)
        VALUES
            ('bb10bf77-844a-417f-af0b-7edd4d4927eb', 3, 'rouge', 'ROUGE'),
            ('2aae1907-4078-4f2c-b3be-ef742934d62e', 3, 'orange', 'ORANGE'),
            ('c88ba8c9-a0e5-4b2e-9f44-571475824e19', 3, 'jaune', 'JAUNE'),
            ('e0a97a2b-eb54-4b67-8d7f-5a994f0f7ecd', 3, 'vert', 'VERT'),
            ('e2579484-a144-4125-84cb-7bd53f5e51b6', 3, 'bleu', 'BLEU'),
            ('d32332cc-45f2-4920-a244-a0f9cd6551f9', 3, 'violet', 'VIOLET'),
            ('9278110d-bed5-4c10-b12c-fd0f60bf4f9e', 3, 'rose', 'ROSE'),
            ('cf547f1d-cddc-4f3e-8b65-904e006fe775', 3, 'noir', 'NOIR'),
            ('8a415eff-76a3-4b8a-a810-827144f3880a', 3, 'blanc', 'BLANC'),
            ('3ac64554-a076-40d8-aeaf-d5ed66999375', 3, 'marron', 'MARRON'),
            ('b1b04417-99e3-4dc4-97d8-ccf08756baf7', 3, 'gris', 'GRIS'),
            ('6bf37bf7-34d8-4443-8f1a-f3edfe6221a3', 3, 'azur', 'AZUR'),
            ('cd99b218-9043-4553-be00-b6e046a74ba1', 3, 'blond', 'BLOND'),
            ('5597e67a-41aa-47dd-8c58-97b6d7ee4738', 3, 'roux', 'ROUX'),
            ('67ebd7ac-802c-4872-901a-8c2698ebe5a1', 3, 'brun', 'BRUN'),
            ('bef45b5b-53b9-40e1-9e8b-309c26dd8e1d', 3, 'mauve', 'MAUVE'),
            ('6e41d84e-41b7-430d-ab1e-bfab037d0e24', 3, 'sable', 'SABLE'),
            ('58f61b89-c158-4a92-8275-65cfde23b198', 3, 'chatain', 'CHATAIN'),
            ('31af4f33-09a3-4649-a194-320cb5bb7cdd', 3, 'fuscia', 'FUSCIA'),
            ('c0f2ddb5-67a7-4b22-80aa-65ffc3c2e9d9', 3, 'turquoise', 'TURQUOISE'),
            ('39db28a1-06fe-48d4-a6b3-079801e34d38', 3, 'olive', 'OLIVE'),
            ('bf548f6c-fbf0-409f-a95c-1d7ef8ff71a3', 3, 'ocre', 'OCRE'),
            ('6e9981ae-56f3-4835-9b5d-f742a6b9533c', 3, 'beige', 'BEIGE'),
            ('1a86563a-6ab3-4387-a000-53cd9fb788a6', 3, 'lime', 'LIME');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
