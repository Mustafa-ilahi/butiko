import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function Header({darkStatus}) {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Image
          source={darkStatus ? images.backButtonDark : images.backButton}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
