/*
this _layout.tsx file wraps the two screens together: [id].tsx, index.tsx
*/

import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import cart from '@/app/cartModal';


export default function MaterialStack () {
    /*
    1) Metal folder-->"index.tsx" is the home screen for tab one. So code: 
    "<Stack.Screen name='index' options={{title: 'Metal'}}/>" is saying for the screen name "index",
    I want to change it to "Metal"
    */
    return (
        <Stack screenOptions={{
            headerRight: () => (
                <Link href="/cartModal" asChild>
                    <Pressable>
                        {({ pressed }) => (
                        <FontAwesome
                            name="shopping-basket"
                            size={25}
                            color={Colors.light.green}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                        )}
                    </Pressable>
                </Link>
          ),}} >
            
            <Stack.Screen name='index' options={{title: 'Metal'}}/>
        </Stack>
    );
    
}