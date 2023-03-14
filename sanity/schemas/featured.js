import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: ' Featured Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: ' Featured Category Name',
      type: 'string',
      validation:(Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short_description',
      type: 'string',
      validation:(Rule) => Rule.required(),
    },
    {
        name: 'restaurants',
        title: 'Restaurants',
        type: 'array',
        of:[{type:'reference', to:[{type:'restaurant'}] }],
    },
  ],
})
