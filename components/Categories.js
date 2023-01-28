import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >

        <CategoryCard name="Tavuk" imageUrl="https://www.gastrofests.com/wp-content/uploads/2020/09/sebzeli-tavuk-izgara-e1600936923904.jpg" />
        <CategoryCard name="Makarna" imageUrl="https://i4.hurimg.com/i/hurriyet/75/750x422/5ad055adc03c0e1110f788db.jpg" />
        <CategoryCard name="Salata" imageUrl="https://i.hbrcdn.com/haber/2020/11/26/farkli-salata-tarifleri-saglikli-ve-lezzetli-13761724_1113_amp.jpg" />
        <CategoryCard name="Kebap" imageUrl="https://i.lezzet.com.tr/images-xxlarge-secondary/evde-kebap-tarifleri-evde-kolayca-yapabileceginiz-12-nefis-kebap-tarifi-6a6e00e5-2f22-492c-9183-83e088684b10.jpg" />
        <CategoryCard name="Pizza" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqigmzKb380-_Av9BRp0XeVyFIBM-YD4l0ijQH8fQiwSeaszFAPnLj3X4fKjKFzb6f4Q&usqp=CAU" />

    </ScrollView>
    
  )
}

export default Categories