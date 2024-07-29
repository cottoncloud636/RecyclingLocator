import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native'; 
import materials from '@assets/data/materials';
import { defaultImg } from '@/components/ItemList';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Button from '@/components/Button';

const {width, height} = Dimensions.get('window');
const material = materials[0]

const MaterialDetail = () =>{
  /* Used a custom hook useLocalSearchParams to extract the id parameter from the local search parameters 
  (typically URL parameters or navigation parameters). The id extracted here is likely a string since URL 
  parameters are usually strings. */
  const {id} = useLocalSearchParams();
  //after enter this detailed item page, dynamically show item name as the page title
  const material = materials.find(m => m.id.toString() === id); //==="id": this id is from the hook

  const addToMyRecycleList = ()=>{
    if (!material) return;
    alert("add to cart");
  };

  /* 1) ?.: optional chaining operator, if material is null or undefined would result in a runtime error
  material?.name will safely return undefined instead of causing an error. 
     2) {material?.bulletPoints?.map((point, index): point-- The current element being processed in the array.
      index -- The index of the current element being processed in the array.
  */
  return(
    <View style={styles.container}>
        <Stack.Screen options={{title: material?.name} }/>
        <View style={styles.topHalf}>
          <Image source={{uri: material?.image || defaultImg}} style={styles.image}/>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>{material?.description}</Text>
          </View>
        </View>
        <Text style={styles.price}>Current Price: ${material?.price} / {material?.measure}</Text>
        <Text style={styles.opening} >Parts and materials can be recycled from an Alternator are:</Text>
        <View style={styles.bpContainer}> 
          {material?.bulletPoints?.map((point, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bulletPointText}>⭐ {point}</Text>
            </View>
        ))}
      </View>
      <Button onPress={addToMyRecycleList} text="Add to my recycling list" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "azure",
    flex: 1,//any background effect will be applied to the entire background
    alignItems: 'flex-start', // Align items to the start of the container
    justifyContent: 'flex-start', // Justify content to the start of the container
  },
  image: {
    width: width / 2,
    height: height / 4,
    resizeMode: 'cover',    
  },
  price:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  topHalf:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start', // Align items to the start of the container
    justifyContent: 'flex-start', // Justify content to the start of the container
  },
  descContainer: {
    flex: 1, // Take up remaining space
    padding: 20, // Add padding around the description
  },
  desc:{
    fontSize: 16,
    textAlign: 'left',
  },
  opening:{
    margin: 5,
    fontSize: 16,

  },
  bpContainer: {
    margin: 20,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPointText:{
    fontSize: 16,
  },

})

export default MaterialDetail;