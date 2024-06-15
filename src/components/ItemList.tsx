import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native'; 

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

// const material = materials[0];
// const imageSource = require(material.image); --error: cuz require is for static image, it can't
                                     // dynamically retrieve "material.image" during compilation time 
const ItemList = ({material}) => {
  console.log(material);

  return (
    <View style={styles.container}>
      <Image source={{uri: material.image}} style={styles.image}/> 
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
