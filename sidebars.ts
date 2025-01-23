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
      label: '🎓Les lieux clés',
      items: [
        '💻developpement/logiciels_utilises',
        '💻developpement/methodologie_conception',
        '💻developpement/💻developpement',
      ],
    },
  ],
};

export default sidebars;
