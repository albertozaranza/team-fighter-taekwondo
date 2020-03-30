import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Router from '~/config/routes';

import COLORS from '~/config/colors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primaryColor}
      />
      <StyledView>
        <Router />
      </StyledView>
    </>
  );
};

const StyledView = styled.View`
  background-color: ${COLORS.backgroundColor};
  flex: 1;
`;

export default App;
