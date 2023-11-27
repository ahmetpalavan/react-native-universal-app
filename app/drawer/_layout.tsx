import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.green.green10,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          headerShown: false,
          title: 'Favorites',
          drawerIcon: ({ color, size }) => <Ionicons name="ios-star" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default Layout;
