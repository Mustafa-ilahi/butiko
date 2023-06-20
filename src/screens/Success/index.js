import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes} from '../../services';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function Success() {
  const [dark, setDark] = useState(false);

  return (
    <SafeAreaView>
      <View style={{padding: sizes.screenHeight * 0.03}}>
        <Header darkStatus={dark}/>
      </View>
      <View>
        <Image
          source={!dark ? images.successLight : images.successDark}
          style={styles.center}
        />
      </View>
      <View style={styles.padding}>
        <Text style={[styles.heading, dark ? styles.dark : styles.light]}>
          Congrats! Your order has been placed
        </Text>
      </View>
      <View style={styles.paddingSM}>
        <Text style={[styles.smallText, dark ? styles.white : styles.gray]}>
          Your order is being to being processed
        </Text>
      </View>
      <View style={styles.btnTop}>
        <TouchableOpacity>
          <View style={styles.purpleBtn}>
            <Image
              source={dark ? images.cartIconDark : images.cartIcon}
              style={styles.cartIcon}
            />
            <Text
              style={[
                {color: dark ? colors.black : colors.white},
                styles.font,
              ]}>
              Track order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnTop}>
        <TouchableOpacity>
          <View style={styles.pinkBtn}>
            <Text
              style={[
                {color: dark ? colors.black : colors.white},
                styles.font,
              ]}>
              Continue shopping
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnTop}>
        <TouchableOpacity>
          <View style={styles.homeBtn}>
            <Image
              source={dark ? images.backButtonDark : images.backButton}
              style={styles.backIcon}
            />

            <Text
              style={[
                styles.backButton,
                dark ? styles.darkText : styles.light,
              ]}>
              Back to home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
