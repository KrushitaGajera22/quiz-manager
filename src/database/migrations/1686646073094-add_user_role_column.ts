import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserRoleColumn1686646073094 implements MigrationInterface {
    name = 'AddUserRoleColumn1686646073094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'member') NOT NULL DEFAULT 'member'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
