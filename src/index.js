import React from 'react';
import { StatusBar, Text } from 'react-native';
import styled from 'styled-components';

import COLORS from '~/config/colors';

// import { Container } from './styles';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primaryColor}
      />
      <StyledView>
        <Text>Team Fighter Taekwondo</Text>
      </StyledView>
    </>
  );
};

const StyledView = styled.View`
  background-color: ${COLORS.backgroundColor};
  flex: 1;
`;

export default App;
