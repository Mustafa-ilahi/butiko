import React, {useState} from 'react';
import {Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import {colors} from '../../services';

export default function Onboarding() {
  const [dark, setDark] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={!dark ? images.OnboardingBg : images.OnboardingBgDark}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.contentView}>
            <Image
              source={!dark ? images.logo : images.logoDark}
              style={styles.left}
            />
          </View>
          <View style={styles.content}>
            <Text style={[styles.heading, dark ? styles.light : styles.dark]}>
              Your fashion style brought close to you
            </Text>
          </View>
          <View style={styles.padding}>
            <Text style={[styles.text, dark ? styles.light : styles.dark]}>
              Each women has their own style, Butiko helps you to find your
              unique style.
            </Text>
          </View>
          <View style={styles.top}>
            {!dark ? (
              <Button title={'Log in'} titleColor={colors.black} />
            ) : (
              <TouchableOpacity>

              <View style={styles.darkBtn}>
                <Text style={[{color: colors.black}, styles.font]}>Log in</Text>
              </View>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.imageView}>
            <Image source={!dark ? images.or: images.orDark} />
          </View>
          <View style={styles.registerTop}>
            <Button
              title={'Register'}
              titleColor={colors.white}
              backgroundPink={true}
              outline={false}
            />
          </View>
          <View style={styles.imageView}>
            <Image source={!dark ? images.or: images.orDark} />
          </View>
          <View style={styles.registerTop}>
            <Button
              title={'Continue as a guest'}
              titleColor={dark ? colors.white : colors.black}
              backgroundPink={false}
              outline={true}
              outlineColor={dark ? 'dark' : 'light'}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
