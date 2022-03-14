
import { MigrationInterface, QueryRunner } from "typeorm";

export class initialData1617550739643 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            -- Text to guess
            INSERT INTO text (uuid, categoryid, original, normalized)
            VALUES
              ('2e375cd0-c7bc-40bf-83b5-49758a1e3178', 2, 'Locomotive', 'LOCOMOTIVE'),
              ('2ba52d1d-c9ac-4af3-acc3-18de715f71a0', 2, 'Pédalo', 'PEDALO'),
              ('2bdb1e3d-07be-4277-8cca-4dc8a210e08e', 2, 'Bateau', 'BATEAU'),
              ('51552d19-31ae-460b-9c02-625751ab3cc9', 2, 'Ponton', 'PONTON'),
              ('6a363378-d11c-4466-9f98-1bd9d695a077', 2, 'Motocyclette', 'MOTOCYCLETTE'),
              ('79a5b07f-357f-4591-b29f-b76c7493eb69', 2, 'Camion', 'CAMION'),
              ('5fa0b41c-169c-479c-b58a-a320b8f9d74b', 2, 'Canoë', 'CANOE'),
              ('7bd98dfb-80f9-471f-8e5a-dd01fc0c9a7f', 2, 'Kayak', 'KAYAK'),
              ('1615c375-9cbf-4275-820b-52d301142aec', 2, 'Roulotte', 'ROULOTTE'),
              ('7191bd9f-f938-4f52-8412-bb17b937e3f3', 2, 'Taxi', 'TAXI'),
              ('f662252e-29e3-41d1-9a95-fb80eb35c656', 2, 'Métro', 'METRO'),
              ('b706a1ee-aee8-4507-85ae-498deb7e1e75', 2, 'Ambulance', 'AMBULANCE'),
              ('5cc02af4-c313-4dc3-b919-2664c4bb0ca2', 2, 'Hélicoptère', 'HELICOPTERE'),
              ('7766115c-85e3-4534-a7b4-db6419eaa901', 2, 'Tracteur', 'TRACTEUR'),
              ('c9ff928e-3d87-448b-872e-1fa3be7a4f10', 2, 'Limousine', 'LIMOUSINE'),
              ('cc190d20-47a2-4351-aaf6-5b805318fdad', 2, 'Voilier', 'VOILIER'),
              ('9b4481cf-3779-4334-beed-2ab7ba4a5190', 2, 'Paquebot', 'PAQUEBOT'),
              ('e3a0a944-753f-40c7-8885-9a0529f49700', 2, 'Motocross', 'MOTOCROSS'),
              ('792c7b3d-13c3-4a0c-a03d-527c5bcbba3a', 2, 'Monocycle', 'MONOCYCLE'),
              ('4f48a223-cd93-4b89-9b80-a48518e290a0', 2, 'Charrue', 'CHARRUE'),
              ('feafc598-c9a5-4a73-a6f6-b74e30e91136', 2, 'Fusée', 'FUSEE'),
              ('535e898f-5656-4124-a65b-b25d2beb6d81', 2, 'Aéronef', 'AERONEF'),
              ('32aa87ae-9848-4858-9c71-5e98f162d1be', 2, 'Trotinette', 'TROTINETTE');
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
