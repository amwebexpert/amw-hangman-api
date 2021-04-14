import { DocumentBuilder } from "@nestjs/swagger";

require('pkginfo')(module, 'name', 'version', 'description', 'author');
const { name, version, description, author } = module.exports;

const swaggerConfigs = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .setContact('amwebexpert', 'http://amwebexpert.users.sourceforge.net/', author)
    .addTag('hangman')
    .build();

export default swaggerConfigs;
