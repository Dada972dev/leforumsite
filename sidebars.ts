import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🏛️ Introduction',
      items: [
        '🏛️intro/presentation',
        '🏛️intro/historique',
        '🏛️intro/intro',
      ],
    },
    {
      type: 'category',
      label: '💻 Développement de la Domus',
      items: [
        '💻developpement/logiciels_utilises',
        '💻developpement/methodologie_conception',
        '💻developpement/💻developpement',
      ],
    },
    {
      type: 'category',
      label: '🔨 La Conception de la Domus dans Minecraft',
      items: [
        '🔨 La Conception de la Domus dans Minecraft/planification_inspiration',
        '🔨 La Conception de la Domus dans Minecraft/choix_materiaux',
        '🔨 La Conception de la Domus dans Minecraft/etapes_construction',
      ],
    },
    {
      type: 'category',
      label: '🏠 Description des Pièces de la Domus',
      items: [
        'description_pieces/description_pieces',
        'description_pieces/atrium',
        'description_pieces/cubiculum',
        'description_pieces/hortus',
        'description_pieces/triclinium', // Séparation correcte des items
        'description_pieces/bains',
      ],
    },
    {
      type: 'category',
      label: '📸 Galerie Multimédia',
      items: [
        'galerie/images_domus',
      ],
    },
    // {
    //   type: 'category',
    //   label: '📚 Références et Documentation',
    //   items: [
    //     'references/sources_historique',
    //     'references/liens_externes',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '💬 Discussions et Contributions',
    //   items: [
    //     'discussions/commentaires',
    //     'discussions/contribution',
    //   ],
    // },
  ],
};

export default sidebars;
