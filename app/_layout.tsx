import { useFonts } from 'expo-font';
import { Slot, SplashScreen, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import config from '../tamagui.config';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/hooks/queryClient';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
            <Theme name={'dark_green'}>
              <Slot />
          </Theme>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
