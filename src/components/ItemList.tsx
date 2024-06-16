import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native'; 
import {Item} from '../datatypes';

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

  return (
    <View style={styles.container}>
      <Image source={{uri: material.image|| defaultImg}} style={styles.image}/> 
      <Text style={styles.title}>{material.name}</Text>
      <Text style={styles.price}>${material.price}/LB</Text>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  //for the entire container's general style
  container: { 
    backgroundColor: 'white',
    padding: 15,
  },
  image: {
    width: '20%', //relative size, change based on the screen size 
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
