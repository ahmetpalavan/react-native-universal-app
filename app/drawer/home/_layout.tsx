import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack, useNavigation } from 'expo-router';
import React from 'react';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.green7.get(),
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Movie List',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
      
        name="movie/[id]"
        options={{
          title: `Movie`,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="tv/[id]"
        options={{
          title: 'TV Show',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
};

export default Layout;
