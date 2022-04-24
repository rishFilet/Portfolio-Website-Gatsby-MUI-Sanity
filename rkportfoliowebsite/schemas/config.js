export default {
  name: 'config',
  title: 'Config',
  type: 'document',
  fields: [
    {
      name: 'content_id',
      title: 'content-id',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'og_url',
      title: 'og:url',
      type: 'url',
    },
    {
      name: 'og_image',
      title: 'og:image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'og_type',
      title: 'og:type',
      type: 'string',
    },
    {
      name: 'og_locale',
      title: 'og:locale',
      type: 'string',
    },
  ],
};
