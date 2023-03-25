import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
  {
    name: 'name',
    title: 'Restaurant name',
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
    name: 'image',
    title: 'Image of the Restaurant',
    type: 'image',
  },
  {
    name: 'lat',
    title: 'Latitude of the Restaurant',
    type: 'number',
  },
  {
    name: 'long',
    title: 'Longtitude of the Restaurant',
    type: 'number',
  },
  {
    name: 'address',
    title: 'Address of the restaurant',
    type: 'string',
  },
  {
    name: 'rating',
    title: 'Enter a number between 1-5',
    type: 'number',
    validation:(Rule) => 
    Rule.required()
    .min(1)
    .max(5)
    .error('Please Enter a Valid number between 1 and 5 '),
  },
  {
    name: 'type',
    title: 'Category',
    validation:(Rule) => 
    Rule.required(),
    type:'reference',
    to:[{type:'category'}],
  },
  {
    name: 'dishes',
    title: 'Dishes',
    type: 'array',
    of:[{type:'reference', to:[{type:'dish'}] }],
  },
  
  ],

  
})
