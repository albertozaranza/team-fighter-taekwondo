import React from 'react';
import { Dimensions, View, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import COLORS from '~/config/colors';

import logo from '~/assets/logo.png';

const { width } = Dimensions.get('window');

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('O email não é válido')
      .required('O email é necessário'),
    password: Yup.string()
      .min(6, 'A senha é muito curta')
      .required('A senha é necessária'),
  });

  return (
    <StyledView>
      <StyledImage source={logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => Alert.alert(JSON.stringify(values))}>
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <>
            <View>
              <StyledText>Email</StyledText>
              <StyledInput
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {errors.email && touched.email && (
              <StyledError>{errors.email}</StyledError>
            )}
            <View>
              <StyledText>Senha</StyledText>
              <StyledInput
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
            </View>
            {errors.password && touched.password && (
              <StyledError>{errors.password}</StyledError>
            )}

            <StyledButton onPress={handleSubmit}>
              <StyledButtonText>Entrar</StyledButtonText>
            </StyledButton>
          </>
        )}
      </Formik>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  margin-bottom: 36px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
`;

const StyledInput = styled.TextInput`
  height: 48px;
  width: ${width - 32}px;
  margin-bottom: 8px;
  padding-horizontal: 8px;
  background-color: ${COLORS.white};
  border-width: 1px;
  border-color: ${COLORS.lightDarkGray};
  border-radius: 8px;
`;

const StyledButton = styled.TouchableOpacity`
  height: 36px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  border-radius: 8px;
  elevation: 3;
  background-color: ${COLORS.primaryColor};
`;

const StyledButtonText = styled.Text`
  font-size: 16px;
  color: ${COLORS.lightGray};
`;

const StyledError = styled.Text`
  font-size: 12px;
  color: ${COLORS.secondaryColor};
`;

export default Login;
