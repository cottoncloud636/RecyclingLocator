import React from 'react';
import { Pressable, StyleSheet, Text, View,Image,ImageSourcePropType } from 'react-native';
import Colors from '../constants/Colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;

} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../../assets/images/smile.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>{text}</Text>
        </View>

      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row', // Arrange icon and text horizontally
    alignItems: 'center', // Vertically center the icon and text
  },
  icon: {
    width: 24, // Size the icon appropriately
    height: 24,
    marginRight: 10, // Space between the icon and text
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;