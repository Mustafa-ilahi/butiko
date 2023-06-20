import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes} from '../../services';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function Failed() {
  const [dark, setDark] = useState(true);

  return (
    <SafeAreaView>
      <View style={{padding: sizes.screenHeight * 0.03}}>
        <Header darkStatus={dark} />
      </View>
      <View style={styles.top}>
        <View>
          <Image
            source={!dark ? images.alert : images.alert}
            style={styles.alert}
          />
        </View>
        <View style={styles.padding}>
          <Text style={[styles.heading, dark ? styles.dark : styles.light]}>
            Oh Snap! Order Failed
          </Text>
        </View>
        <View style={styles.paddingSM}>
          <Text style={[styles.smallText, dark ? styles.gray : styles.gray]}>
            Looks like something went wrong while processing your request.
          </Text>
        </View>

        <View style={styles.btnTop}>
          <TouchableOpacity>
            <View style={styles.pinkBtn}>
              <Text
                style={[
                  {color: dark ? colors.black : colors.white},
                  styles.font,
                ]}>
                Please Try Again
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
      </View>
    </SafeAreaView>
  );
}
