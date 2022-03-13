
import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1617550739642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            -- Categories
            INSERT INTO category (uuid, langcode, name)
            VALUES
                ('580b0004-d581-49d1-9c84-bddffdb5f3fd', 'fr', 'animaux'),
                ('64d28a1e-24cf-40f7-a6f1-3a76fd534639', 'fr', 'transport');
            
            -- Text to guess
            INSERT INTO text (uuid, categoryid, original, normalized)
            VALUES
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
            INSERT INTO text (uuid, categoryid, original, normalized)
            VALUES
                ('2b6e16a9-ab0e-4077-bf12-7e5f6e2359b4', 1, 'Locomotive', 'LOCOMOTIVE'),
                ('8feb2475-edf4-43f9-a0dd-312927a442ee', 1, 'Pédalo', 'PEDALO'),
                ('deb8c45c-d49f-4e09-a62a-47c1a7d0ae71', 1, 'Bateau', 'BATEAU'),
                ('0425fd51-a8f3-48b4-98fb-39e5286949af', 1, 'Ponton', 'PONTON'),
                ('81d9180f-4aa4-4120-8ea7-d3902063bb8f', 1, 'Motocyclette', 'MOTOCYCLETTE'),
                ('1d27aff0-8c08-4d62-b011-7b071bd4b51e', 1, 'Camion', 'CAMION'),
                ('d96f4c17-1b44-4fe8-9131-ee97b37fd3a9', 1, 'Canoë', 'CANOE'),
                ('39d14131-af25-4e4b-b561-4d9bbd27da6d', 1, 'Kayak', 'KAYAK'),
                ('ec87987b-6bfb-42b8-86b4-ed8cf18bbd2a', 1, 'Roulotte', 'ROULOTTE'),
                ('9fbe1ad1-080e-4a72-ade6-e31e313f5964', 1, 'Taxi', 'TAXI'),
                ('a07637ba-6466-4180-a88f-2bedad04926a', 1, 'Métro', 'METRO'),
                ('7da78715-2747-4365-8a6e-8635b52630c9', 1, 'Ambulance', 'AMBULANCE'),
                ('f0286481-e7d0-48e9-bfae-2a50698517af', 1, 'Hélicoptère', 'HELICOPTERE'),
                ('1c7fe30b-9ea3-498b-af0f-9d52ca97df24', 1, 'Tracteur', 'TRACTEUR'),
                ('f02c07f5-33c2-4ee0-99f0-7ac2e8069070', 1, 'Limousine', 'LIMOUSINE'),
                ('294f74b1-0f2c-4478-81b1-63ea45ee6b80', 1, 'Voilier', 'VOILIER'),
                ('eb28c483-16cf-42cd-a9bb-66ec93aeb39a', 1, 'Paquebot', 'PAQUEBOT'),
                ('0cad9414-073e-4d6c-9e6a-ad179bb0964c', 1, 'Motocross', 'MOTOCROSS'),
                ('c459be0d-4000-4edc-bf90-8d0dcb50dd8a', 1, 'Motocyclistette', 'MOTOCYCLISTETTE'),
                ('0919b2aa-2e1f-484d-962e-ef5627fd8934', 1, 'Charrue', 'CHARRUE'),
                ('0fb98dc6-e109-4981-9378-5a1b803bea10', 1, 'Fusée', 'FUSEE'),
                ('c2c758f0-08d3-4080-a2e0-dd1200d10a2c', 1, 'Aéronef', 'AERONEF'),
                ('8b12a5c5-7c47-41ba-bc7b-4459032e6191', 1, 'Trotinette', 'TROTINETTE');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
