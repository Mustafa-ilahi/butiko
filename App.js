import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {colors, sizes} from './src/services';
import Onboarding from './src/screens/Onboarding';
import Success from './src/screens/Success';
import Failed from './src/screens/Failed';
import Cart from './src/screens/Cart';
import CreditCard from './src/screens/CreditCard';
import NotifcationsScreen from './src/screens/NotificationsScreen';

export default function App() {
  const [dark, setDark] = useState(false);
  // const [dark, setDark] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          !dark ? styles.lightColor : styles.darkColor,
        ]}>
        {/* <Onboarding /> */}
        {/* <Success /> */}
        {/* <Failed /> */}
        {/* <Cart /> */}
        {/* <CreditCard /> */}
        <NotifcationsScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
  },

  lightColor: {
    backgroundColor: colors.white,
  },
  darkColor: {
    backgroundColor: colors.black,
  },
});
