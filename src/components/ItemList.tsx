import Colors from '@/constants/Colors';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native'; 
import {Item} from '../datatypes';
import { Link } from 'expo-router'; 

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

// const material = materials[0];
// const imageSource = require(material.image); --error: cuz require is for static image, it can't
                                     // dynamically retrieve "material.image" during compilation time

export const defaultImg = 'https://1drv.ms/i/c/7a7b868a35d5cb38/IQP1XMWD4VoEQJP3jPhwDtrXAT9B8SoLpNxE2IpAgdsiZWs?width=1024';

type ItemListProps = {// denote: the ItemListProps type is equal to an obj.
  material: Item; //"Item" came from datatypes.tsx -- "export type Item", it is the type we want to use on the props
                  //"material": is the props, should be the same as in "const ItemList = ({material}: ItemListProps) =>"
}  

const ItemList = ({material}: ItemListProps) => {
  console.log(material);
/* 1) /Material: -- for static route only!! "Material" is the same as as Matrial.tsx file 
   2) <Pressable> is the same as <View>, except <View> doesn't have press event, where I can press a text or image
   3) The route /Metal/${material.id} should closely related with the folder structure. Here we want
   display each item's detail based on their id, hence id is an identifier of an item. So we need to
   find this [id].tsx file, which is under "Metal" folder, hence we need to add this /Metal/ route
   so that it will find this [id].tsx file. Noted: the folder name with "()" around is an optional
   route, hence (tabs) didn't include in the route. 
*/
  return (
    <Link href={`/Metal/${material.id}`} asChild>  
      <Pressable style={styles.container}>
        <Image source={{uri: material.image|| defaultImg}} style={styles.image}/> 
        <Text style={styles.title}>{material.name}</Text>
        <Text style={styles.price}>${material.price} / {material.measure}</Text>
        
      </Pressable>
    </Link>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  //for the entire container's general style
  container: { 
    backgroundColor: 'white',
    padding: 15,
    flex: 1, //split parent column space evenly between sibling. Hence, if last item is listed by itself, it will
    maxWidth: '50%', // take up the entire space, hence using maxWidth can restrict that. 
  },
  image: {
    width: '45%', //relative size, change based on the screen size 
    aspectRatio: 1, // 1: a square picture, 1/2: width is half of the height.
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    color: Colors.light.green,
    fontWeight: '700',
    fontStyle: 'italic',
  }
});
