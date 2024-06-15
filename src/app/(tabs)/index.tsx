
import { View } from 'react-native'; 
import materials from '../../../assets/data/materials';
import ItemList from '@/src/components/ItemList';

export default function TabOneScreen() {
  return(
    <View>
      <ItemList material={materials[0]} />
      <ItemList material={materials[1]} />
    </View>
  )
};

