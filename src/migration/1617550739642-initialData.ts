
import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1617550739642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            -- Text to guess - french animals
            INSERT INTO text (uuid, categoryid, original, normalized)
            VALUES
                ('92186b0b-f4c7-4e45-a321-1f34d9648f2f', 1, 'Chien', 'CHIEN'),
                ('c64c946b-549c-45b6-a4b8-edbca43fa7bd', 1, 'Chat', 'CHAT'),
                ('ed61c18a-d0e4-4dc7-afa6-c5f8bcf7238c', 1, 'Poisson', 'POISSON'),
                ('0eaa98db-5b07-48e4-81e7-57d2685ef547', 1, 'Reptile', 'REPTILE'),
                ('ff7c8cc1-b016-4fd8-8eae-6a081497aaaa', 1, 'Cheval', 'CHEVAL'),
                ('ede69556-eb54-481c-8e48-349e82295198', 1, 'Oiseau', 'OISEAU'),
                ('bda5f20b-f0ac-4b03-a36a-bcd7136beb46', 1, 'Aigle', 'AIGLE'),
                ('712685c8-0412-4b25-96c6-bdda5c8989a6', 1, 'Vipère', 'VIPERE'),
                ('e863e65b-3768-450f-92e5-08cfd3720e6c', 1, 'Aligator', 'ALIGATOR'),
                ('ded275a1-cb25-4c00-9290-eb973c69ba25', 1, 'Crocodile', 'CROCODILE'),
                ('1427f890-a85d-48e7-b4c4-6b070e618afd', 1, 'Ours', 'OURS'),
                ('f7692bdd-5455-4f08-b37e-57bdf67cd5e5', 1, 'Chatte', 'CHATTE'),
                ('03f935e7-8a5a-4870-977d-a6cf0aea65ed', 1, 'Serpent', 'SERPENT'),
                ('9750e50b-241c-453a-9ed9-63807f84b1cb', 1, 'Zèbre', 'ZEBRE'),
                ('2e0da8d5-2fa0-4fd6-8a19-c069d8ac82db', 1, 'Rinocéros', 'RINOCEROS'),
                ('7da55644-c322-4707-aa49-6f6115b44171', 1, 'Tigre', 'TIGRE'),
                ('d3021379-f0f7-4f75-bf57-2e0727f2b039', 1, 'Léopard', 'LEOPARD'),
                ('6662603a-fa56-4498-a1d8-a50cb333d63e', 1, 'Éléphant', 'ELEPHANT'),
                ('3f89c842-888c-41e8-b230-2ce46129c915', 1, 'Girafe', 'GIRAFE'),
                ('15a2b2c4-a4ed-484d-aa74-96c912f76708', 1, 'Hippopotame', 'HIPPOPOTAME'),
                ('9b8d7a60-8ac2-4f6a-a527-22b0f2094aaf', 1, 'Loup', 'LOUP'),
                ('42074e3e-97ba-48e0-829b-b8f234887984', 1, 'Renard', 'RENARD'),
                ('45f05e39-27aa-4cf7-9cb1-41e4002b8edf', 1, 'Lion', 'LION'),
                ('aecf8013-e99a-4b5b-845e-81a74998cbc4', 1, 'Taureau', 'TAUREAU'),
                ('f3a8b9be-7f4a-4715-a554-395276334c51', 1, 'Lézard', 'LEZARD'),
                ('003c3573-bf68-4fb2-add6-744983e88cb9', 1, 'Lynx', 'LYNX'),
                ('1c3989ef-a800-42c7-b8b3-60ca6a6bdb05', 1, 'Cobra', 'COBRA'),
                ('edf57836-a382-422f-b30a-bd082aeba89e', 1, 'Chouette', 'CHOUETTE'),
                ('a7e1c302-9e31-4c40-8754-a358c310d93d', 1, 'Hibou', 'HIBOU'),
                ('bf01ee11-bc6b-491d-8e2e-3addc77de038', 1, 'Hirondelle', 'HIRONDELLE'),
                ('4b4a159a-804b-4c52-a6a2-878c3a154193', 1, 'Guépard', 'GUEPARD'),
                ('5865e157-9d3b-4ea1-b0fc-3894a183c10b', 1, 'Mouton', 'MOUTON'),
                ('56d86c86-8d34-4b03-83b0-031fe8560efd', 1, 'Brebis', 'BREBIS'),
                ('60af42a3-3b8d-4b9e-a9ab-64aa69e39835', 1, 'Écureuil', 'ECUREUIL'),
                ('97a992d4-f7b5-4a10-8309-33a3c648ff37', 1, 'Chevreuil', 'CHEVREUIL'),
                ('6b2f68d2-811e-47db-b4ae-d3acf7ef7d25', 1, 'Lapin', 'LAPIN'),
                ('b0782dbb-5aae-4059-ba2c-bdb2da88f83c', 1, 'Souris', 'SOURIS'),
                ('6ef91fc9-2297-4050-b728-995114f02b89', 1, 'Rat', 'RAT'),
                ('1745a518-c94e-4e94-891b-4c8453dde370', 1, 'Tortue', 'TORTUE'),
                ('42888042-7b83-4f94-ae55-e489315e0eaf', 1, 'Loutre', 'LOUTRE'),
                ('47e2011e-39a3-441e-a7e3-e37ba83fc761', 1, 'Pingouin', 'PINGOUIN'),
                ('6fbc3263-0a4f-4e55-b3e1-3c79b6b8f41a', 1, 'Lièvre', 'LIEVRE'),
                ('ed9312e6-8daf-46b4-9f6e-89c49601bac3', 1, 'Hamster', 'HAMSTER'),
                ('c385f753-63e7-437b-8e83-8576713b6f75', 1, 'Caribou', 'CARIBOU'),
                ('104246d0-3faa-4040-aee3-96a739010c90', 1, 'Panthère', 'PANTHERE'),
                ('ce491121-146a-428a-bcda-e3c79713c81a', 1, 'Dromadaire', 'DROMADAIRE'),
                ('5e195f54-c1d3-4268-ab72-f31038f2a1bd', 1, 'Chameau', 'CHAMEAU'),
                ('77661273-3213-4301-9f33-0104fc9e784f', 1, 'Grenouille', 'GRENOUILLE'),
                ('55768e98-616e-43a3-bc7a-f3add1fe1749', 1, 'Crapaud', 'CRAPAUD'),
                ('f0484e9c-307d-4f20-9357-d52d7e1fae61', 1, 'Coq', 'COQ'),
                ('f1005a16-b34f-4174-96f9-c38b31023d16', 1, 'Poule', 'POULE'),
                ('baa2f999-bc09-4a8b-ac7b-13558f55dcec', 1, 'Goéland', 'GOELAND'),
                ('237af068-1233-49d5-8e33-fd669ceaf8eb', 1, 'Mouette', 'MOUETTE'),
                ('3df1f882-2a0d-4cc0-b541-bdda12517f7a', 1, 'Cygne', 'CYGNE'),
                ('19ceff95-213b-43bc-95a3-0ba13065f8f7', 1, 'Chacal', 'CHACAL'),
                ('5b89afc4-d13c-4cfc-87fe-523e9406b8f0', 1, 'Corbeau', 'CORBEAU'),
                ('288ce343-dca8-4c83-b601-a9d7e66511b4', 1, 'Cerf', 'CERF');
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
