import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
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
      name: 'price',
      title: 'Price of the Dish in SEK',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
  ],
})
