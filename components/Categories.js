import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { client, urlFor } from '../sanity'

const Categories = () => {

  const [categories, setCategories] = useState([])


  useEffect(() => {
      client.fetch(
        `
         *[_type == "category" ]
      `
      )
      .then(data => setCategories(data.reverse()) )
      .catch(error => console.error(error))
    }, [])
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {categories.map(category => {
        return <CategoryCard
        key={category._id}
         imageuri={urlFor(category.image).width(200).url()}
          Title={category.name}/>
      })}

    </ScrollView>
  )
}

export default Categories