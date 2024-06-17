/*
this _layout.tsx file wraps the two screens together: [id].tsx, index.tsx
*/

import { Stack } from 'expo-router';

export default function MaterialStack () {
    /*
    1) Metal folder-->"index.tsx" is the home screen for tab one. So code: 
    "<Stack.Screen name='index' options={{title: 'Metal'}}/>" is saying for the screen name "index",
    I want to change it to "Metal"
    */
    return (
        <Stack>
            <Stack.Screen name='index' options={{title: 'Metal'}}/>
        </Stack>
    );
    
}