import { MigrationInterface, QueryRunner } from "typeorm"

export class initialData1655044716016 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
                -- Text to guess - english U.S. state names
                INSERT INTO text (uuid, categoryid, original, normalized)
                VALUES
                    ('1d6eace9-6cc5-41c3-9ed5-11f172878903', 4, 'Alabama', 'ALABAMA'),
                    ('0daa5d05-adaf-4a2e-a6c4-9ab827ea1eec', 4, 'Alaska', 'ALASKA'),
                    ('d8db7267-bd52-4be0-84ca-f8b76fa223d5', 4, 'Arizona', 'ARIZONA'),
                    ('dd87560c-1611-4251-8c73-739f0b46527a', 4, 'Arkansas', 'ARKANSAS'),
                    ('a80370fa-dcfb-4f0c-9024-4edacaa469ec', 4, 'California', 'CALIFORNIA'),
                    ('ce04dcc1-40a1-40d0-94fe-8e3f4927d3cf', 4, 'Colorado', 'COLORADO'),
                    ('935d37c5-488a-4d48-b87a-f9471b9ce966', 4, 'Connecticut', 'CONNECTICUT'),
                    ('a5c33360-5913-404c-9497-671d5ebe477c', 4, 'Delaware', 'DELAWARE'),
                    ('2bdbfd34-24b8-4b09-9878-bcb4a561ba60', 4, 'Florida', 'FLORIDA'),
                    ('f1139ca6-5be3-4593-9bbd-a2d54ca633dc', 4, 'Georgia', 'GEORGIA'),
                    ('9cf6f7d3-0665-4044-8824-a1c636089395', 4, 'Hawaii', 'HAWAII'),
                    ('62c299e0-998f-4e57-aaf1-4c51535a1229', 4, 'Idaho', 'IDAHO'),
                    ('ffe7e1c3-3ec2-4b59-9948-4aa926652aeb', 4, 'Illinois', 'ILLINOIS'),
                    ('f0d36417-1fe2-4c23-8526-d811fc553096', 4, 'Indiana', 'INDIANA'),
                    ('c4c22875-e61f-4bf4-8294-807a84079708', 4, 'Iowa', 'IOWA'),
                    ('b20fa54a-6d55-4792-bf96-9b69851bfbe0', 4, 'Kansas', 'KANSAS'),
                    ('f672e98a-4630-4a77-a13d-7eee63d1ed11', 4, 'Kentucky', 'KENTUCKY'),
                    ('0e3ce7ea-27ee-4945-992c-d387eb2db356', 4, 'Louisiana', 'LOUISIANA'),
                    ('d32b0e51-25bb-4c70-9d68-a8d3bd6fea52', 4, 'Maine', 'MAINE'),
                    ('85e2bfd8-6de4-4b8e-b350-416f8eab6626', 4, 'Maryland', 'MARYLAND'),
                    ('3d2e3d16-4746-4f14-962f-ed3876152146', 4, 'Massachusetts', 'MASSACHUSETTS'),
                    ('da51696d-8bc1-4f01-838c-87deb9f5cc51', 4, 'Michigan', 'MICHIGAN'),
                    ('9e32eefd-71de-4ef7-bbc3-1b5f4c06c405', 4, 'Minnesota', 'MINNESOTA'),
                    ('fe6c73df-8446-4f9d-a74f-1bf8258ecc71', 4, 'Mississippi', 'MISSISSIPPI'),
                    ('80dc318c-76fc-4f13-9915-bf6a76ebad9d', 4, 'Missouri', 'MISSOURI'),
                    ('dae0fde0-9ee7-4c98-9ac9-0bf8356f8fb0', 4, 'Montana', 'MONTANA'),
                    ('cb0fb547-f1de-44fd-9932-9bf0c1c24612', 4, 'Nebraska', 'NEBRASKA'),
                    ('e52e445b-22d5-4a51-a0be-11144a3f5938', 4, 'Nevada', 'NEVADA'),
                    ('368d9f8e-6300-4b1b-bf26-5ea097283d2c', 4, 'New Hampshire', 'NEW HAMPSHIRE'),
                    ('9c188873-7070-4448-8067-cdc827852ed4', 4, 'New Jersey', 'NEW JERSEY'),
                    ('1433fa89-9cf8-4779-bd4e-7d1d4facdf01', 4, 'New Mexico', 'NEW MEXICO'),
                    ('e8e9bcb1-1df7-407b-a0b7-c77409365c33', 4, 'New York', 'NEW YORK'),
                    ('562d814a-f6c9-4c03-b239-5e3632f98e66', 4, 'North Carolina', 'NORTH CAROLINA'),
                    ('dbff4728-de6f-4eb5-8ac9-b094637da30b', 4, 'North Dakota', 'NORTH DAKOTA'),
                    ('167836fc-69f7-45e8-8da8-41b8a04fb5c8', 4, 'Ohio', 'OHIO'),
                    ('d24cfd6e-729b-4b2d-a526-1b1ec8f096cb', 4, 'Oklahoma', 'OKLAHOMA'),
                    ('bc50131b-09c4-492f-964e-caf04e459f64', 4, 'Oregon', 'OREGON'),
                    ('70acd890-cb41-49dd-af71-dd7e5dfbca35', 4, 'Pennsylvania', 'PENNSYLVANIA'),
                    ('b83104b2-cf32-49a4-a0b6-2a34024f94e7', 4, 'Rhode Island', 'RHODE ISLAND'),
                    ('1b93d9bc-cd7d-4cc6-9b6b-43fef50c1fed', 4, 'South Carolina', 'SOUTH CAROLINA'),
                    ('7a2df1c6-f7fa-4055-9c3b-5b22e175496b', 4, 'South Dakota', 'SOUTH DAKOTA'),
                    ('8fb88caa-ef69-4dc5-b483-2e3271ecac1b', 4, 'Tennessee', 'TENNESSEE'),
                    ('c0ff57d4-3b32-4cbe-bd97-3d113ca6a735', 4, 'Texas', 'TEXAS'),
                    ('6ff12f3f-48bb-41d2-83ef-66df74903c79', 4, 'Utah', 'UTAH'),
                    ('8b8e8344-2168-4c38-8af7-c0eaca6d910a', 4, 'Vermont', 'VERMONT'),
                    ('f3bdd8be-d667-4c61-8a73-6226a336ec08', 4, 'Virginia', 'VIRGINIA'),
                    ('b9e196e1-c965-4eae-b96b-74067438a9b1', 4, 'Washington', 'WASHINGTON'),
                    ('7314e5c9-7a46-4af5-b7cf-b9f7b2634e1c', 4, 'West Virginia', 'WEST VIRGINIA'),
                    ('57ee1a8a-55c2-4f30-b4bd-11c650307073', 4, 'Wisconsin', 'WISCONSIN'),
                    ('f2aa1cd3-173c-4dd0-88a6-43c0434276c4', 4, 'Wyoming', 'WYOMING');
            `);
      }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
