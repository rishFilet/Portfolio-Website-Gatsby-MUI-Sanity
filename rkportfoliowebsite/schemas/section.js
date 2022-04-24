export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heroInterests',
      title: 'Hero Interests',
      type: 'array',
      of: [
        {
          type: 'interests',
        },
      ],
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'socialicons',
        },
      ],
    },
  ],
};
