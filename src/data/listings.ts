export type Listing = {
  id: string;
  title: string;
  arrondissement: string;
  address: string;
  surface: number;
  price: number;
  headroom: string;
  access: string;
  tags: string[];
};

// Adresses et données factices — à remplacer par les adresses réelles du parc.
export const listings: Listing[] = [
  {
    id: 'cave-11-01',
    title: 'Cave sèche et ventilée',
    arrondissement: '11e arrondissement',
    address: '24 rue de la Roquette, 75011 Paris',
    surface: 6,
    price: 45,
    headroom: '1,90 m',
    access: 'Accès par digicode, escalier',
    tags: ['Ventilée', 'Sèche', 'Vidéosurveillance immeuble'],
  },
  {
    id: 'cave-18-01',
    title: 'Box de stockage sécurisé',
    arrondissement: '18e arrondissement',
    address: '9 rue Ordener, 75018 Paris',
    surface: 4,
    price: 35,
    headroom: '1,80 m',
    access: 'Accès badge, porte grillagée individuelle',
    tags: ['Grillagée', 'Porte individuelle'],
  },
  {
    id: 'cave-15-01',
    title: 'Grande cave voûtée',
    arrondissement: '15e arrondissement',
    address: '58 rue du Commerce, 75015 Paris',
    surface: 10,
    price: 70,
    headroom: '2,10 m',
    access: 'Accès direct depuis la cour',
    tags: ['Volume XL', 'Accès facile', 'Idéal meubles'],
  },
  {
    id: 'cave-13-01',
    title: 'Cave de dépannage',
    arrondissement: '13e arrondissement',
    address: '112 avenue de Choisy, 75013 Paris',
    surface: 3,
    price: 28,
    headroom: '1,75 m',
    access: 'Accès par escalier, 2ème sous-sol',
    tags: ['Petit budget', 'Cartons & saisonnier'],
  },
  {
    id: 'cave-09-01',
    title: 'Cave lumineuse en soubassement',
    arrondissement: '9e arrondissement',
    address: '17 rue de Trévise, 75009 Paris',
    surface: 5,
    price: 42,
    headroom: '1,95 m',
    access: 'Accès par ascenseur jusqu\'au sous-sol',
    tags: ['Ascenseur', 'Sèche'],
  },
  {
    id: 'cave-20-01',
    title: 'Cave avec prise électrique',
    arrondissement: '20e arrondissement',
    address: '3 rue des Pyrénées, 75020 Paris',
    surface: 7,
    price: 48,
    headroom: '1,85 m',
    access: 'Accès digicode, plain-pied depuis la cour',
    tags: ['Électricité', 'Plain-pied'],
  },
];
