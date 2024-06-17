import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'; 


const MaterialDetail = () =>{
  const {id} = useLocalSearchParams();
  return(
    <View>
        <Stack.Screen options={{title: 'Details: '+ id} }/>
        <Text> material detail: {id}</Text>
    </View>
  );
};

export default MaterialDetail;