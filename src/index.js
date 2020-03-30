import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Login from '~/pages/Login';

import COLORS from '~/config/colors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primaryColor}
      />
      <StyledView>
        <Login />
      </StyledView>
    </>
  );
};

const StyledView = styled.View`
  background-color: ${COLORS.backgroundColor};
  flex: 1;
`;

export default App;
