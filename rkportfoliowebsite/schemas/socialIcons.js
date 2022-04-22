export default {
  name: 'socialicons',
  title: 'Social Icons',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
