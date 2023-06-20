import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

export default function Button({title, titleColor, backgroundPink, outline,outlineColor,dark}) {
  return (
    <TouchableOpacity>
      {!outline ? (
        <View style={backgroundPink ? styles.pinkBtn : styles.whiteBtn}>
          <Text style={[{color: titleColor}, styles.font]}>{title}</Text>
        </View>
      ) : (
        <View style={outlineColor == "light" ? styles.outline : styles.darkOutline}>
          <Text style={[{color: titleColor}, styles.font]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
