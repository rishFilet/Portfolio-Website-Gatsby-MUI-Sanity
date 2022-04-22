export default {
  name: 'interests',
  title: 'Interests',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alttext',
      title: 'Alt Text',
      type: 'string',
    },
  ],
};
