import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import COLORS from '~/config/colors';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primaryColor}
      />
      <View style={{ backgroundColor: COLORS.backgroundColor, flex: 1 }}>
        <Text>Team Fighter Taekwondo</Text>
      </View>
    </>
  );
}
