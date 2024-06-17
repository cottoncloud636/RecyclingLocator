
import { View, FlatList } from 'react-native'; 
import materials from '@assets/data/materials';
import ItemList from '@/components/ItemList';

export default function TabOneScreen() {
    /*
    1) FlatList: to create scrollable lists. 
    2) It has two part. data: where does the scrollable list's data come from. renderItem: how we want to render
        these data, such as the structure of these data's display
    3) {{item}}: pass in "item", item is a var that when we loop through "materials" data, put each data into this
        item, and use it in its function.
    */
      
  return(


    <FlatList 
      data={materials}
      renderItem={({ item }) => <ItemList material={item} />} //<ItemList .../>: rendered component
      numColumns={2} //split the column into 2
      contentContainerStyle={{ gap: 10, padding: 10 }} 
      columnWrapperStyle={{ gap: 10 }}// these two styling vs "margin: 10" is that margin affect external area of the
                                      // container, while these two affect internal container
    />

  );
}
