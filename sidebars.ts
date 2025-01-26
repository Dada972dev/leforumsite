import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🏛️ Introduction',
      items: [
        '🏛️intro/intro',
      ],
    },
    {
      type: 'category',
      label: '🎓Les lieux clés',
      items: [
        '💻developpement/💻developpement',
      ],
    },
  ],
};

export default sidebars;
