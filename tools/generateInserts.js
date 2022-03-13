const { v4: uuidv4 } = require('uuid');

const animals = [
  'Oiseau',
  'Aigle',
  'Vipère',
  'Aligator',
  'Crocodile',
  'Ours',
  'Chatte',
  'Serpent',
  'Zèbre',
  'Rinocéros',
  'Tigre',
  'Léopard',
  'Éléphant',
  'Girafe',
  'Hippopotame',
  'Loup',
  'Renard',
  'Lion',
  'Taureau',
  'Lézard',
  'Lynx',
  'Cobra',
  'Chouette',
  'Hibou',
  'Hirondelle',
  'Guépard',
  'Mouton',
  'Brebis',
  'Écureuil',
  'Chevreuil',
  'Lapin',
  'Souris',
  'Rat',
  'Tortue',
  'Loutre',
  'Pingouin',
  'Lièvre',
  'Hamster',
  'Caribou',
  'Panthère',
  'Dromadaire',
  'Chameau',
  'Grenouille',
  'Crapaud',
  'Coq',
  'Poule',
  'Goéland',
  'Mouette',
  'Cygne',
  'Chacal',
  'Corbeau',
  'Cerf',
];

const transports = [
  'Locomotive',
  'Pédalo',
  'Bateau',
  'Ponton',
  'Motocyclette',
  'Camion',
  'Canoë',
  'Kayak',
  'Roulotte',
  'Taxi',
  'Métro',
  'Ambulance',
  'Hélicoptère',
  'Tracteur',
  'Limousine',
  'Voilier',
  'Paquebot',
  'Motocross',
  'Motocyclistette',
  'Charrue',
  'Fusée',
  'Aéronef',
  'Trotinette',
];

// ('ff7c8cc1-b016-4fd8-8eae-6a081497aaaa', 1, 'Cheval', 'CHEVAL');
transports.forEach((value) => {
  const normalized = value.toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const uuid = uuidv4();
  console.log(`('${uuid}', 1, '${value}', '${normalized}'),`);
});
