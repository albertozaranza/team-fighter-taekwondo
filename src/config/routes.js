import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '~/pages/Login';
import Student from '~/pages/Student';
import Add from '~/pages/Add';
import Training from '~/pages/Training';

import COLORS from '~/config/colors';

import student from '~/assets/student.png';
import studentInative from '~/assets/studentInative.png';
import add from '~/assets/add.png';
import addInative from '~/assets/addInative.png';
import training from '~/assets/training.png';
import trainingInative from '~/assets/trainingInative.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: COLORS.primaryColor,
            inactiveTintColor: COLORS.lightDarkGray,
          }}>
          <Tab.Screen
            name="Student"
            component={Student}
            options={{
              tabBarLabel: 'Alunos',
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={student} />
                ) : (
                  <Image source={studentInative} />
                ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={Add}
            options={{
              tabBarLabel: 'Adicionar',
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={add} />
                ) : (
                  <Image source={addInative} />
                ),
            }}
          />
          <Tab.Screen
            name="Training"
            component={Training}
            options={{
              tabBarLabel: 'Treinos',
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={training} />
                ) : (
                  <Image source={trainingInative} />
                ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
