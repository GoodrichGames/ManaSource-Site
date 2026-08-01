const baseUrl = 'https://www.manasourcegame.com';

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'Goodrich Games',
  url: baseUrl,
};

const designerSchema = {
  '@type': 'Person',
  '@id': `${baseUrl}/#paul-goodrich`,
  name: 'Paul Goodrich',
  jobTitle: 'Lead Designer',
  worksFor: {
    '@id': organizationSchema['@id'],
  },
  image: `${baseUrl}/images/PaulProfile.jpg`,
};

const videoSchema = {
  '@type': 'VideoObject',
  '@id': `${baseUrl}/#teaser-trailer`,
  name: 'Mana Source Teaser Trailer',
  description: 'A teaser trailer for Mana Source, a tactical adventure board game from Goodrich Games.',
  thumbnailUrl: 'https://img.youtube.com/vi/h9tHSCE1T84/maxresdefault.jpg',
  uploadDate: '2022-11-29',
  embedUrl: 'https://www.youtube.com/embed/h9tHSCE1T84',
  publisher: {
    '@id': organizationSchema['@id'],
  },
};

const gameSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Game', 'Product'],
      '@id': `${baseUrl}/#game`,
      name: 'Mana Source',
      url: `${baseUrl}/`,
      description: 'A discovery at an ancient vault may be the last hope of a people driven underground... Mana Source is a tactical adventure board game for 1-4 players. You\'ll need to work together to solve unique challenges, overcome deadly adversaries, and coordinate your abilities if you\'re going to survive.',
      image: `${baseUrl}/images/cave.png`,
      genre: ['Adventure', 'Fantasy', 'Strategy'],
      category: 'Board game',
      brand: {
        '@id': organizationSchema['@id'],
      },
      publisher: {
        '@id': organizationSchema['@id'],
      },
      creator: {
        '@id': designerSchema['@id'],
      },
      gameMode: ['Cooperative', 'Competitive'],
      numberOfPlayers: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 4,
      },
      typicalAgeRange: '13+',
      hasPart: [
        {
          '@type': 'Game',
          name: 'Mana Source Campaign',
          description: 'Cooperative adventure campaign mode with scenarios lasting 120-180 minutes.',
          gameMode: 'Cooperative',
          timeRequired: 'PT180M',
        },
        {
          '@type': 'Game',
          name: 'Mana Source Skirmish',
          description: 'Competitive skirmish mode with typical sessions lasting 90 minutes.',
          gameMode: 'Competitive',
          timeRequired: 'PT90M',
        },
        {
          '@type': 'Game',
          name: 'Mana Source Clash',
          description: 'Competitive player-versus-player mode with typical sessions lasting 20 minutes.',
          gameMode: 'Competitive',
          timeRequired: 'PT20M',
        },
      ],
      subjectOf: {
        '@id': videoSchema['@id'],
      },
      sameAs: 'https://boardgamegeek.com/boardgame/391828/mana-source',
    },
    organizationSchema,
    designerSchema,
    videoSchema,
  ],
};

const parseDate = (date) => {
  if (!date) return undefined;
  const normalizedDate = String(date).replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsedDate = new Date(normalizedDate);
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString().split('T')[0];
};

const absoluteUrl = (path) => `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;

const getArticleSchema = ({ title, description, image, link, date, categories = [] }) => {
  const articleUrl = absoluteUrl(link);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline: title,
    description: description || `${title} — Mana Source article from Goodrich Games.`,
    url: articleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    author: {
      '@id': designerSchema['@id'],
    },
    publisher: {
      '@id': organizationSchema['@id'],
    },
    articleSection: categories,
    inLanguage: 'en-US',
  };

  const publishedDate = parseDate(date);
  if (publishedDate) articleSchema.datePublished = publishedDate;
  if (image) articleSchema.image = absoluteUrl(image);

  return articleSchema;
};

const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

module.exports = {
  baseUrl,
  designerSchema,
  gameSchema,
  getArticleSchema,
  getBreadcrumbSchema,
  organizationSchema,
  videoSchema,
};
