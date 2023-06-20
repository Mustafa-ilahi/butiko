import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  image: {
    height: sizes.screenHeight,
  },
  contentView: {
    alignSelf: 'center',
    paddingTop: sizes.screenHeight * 0.22,
  },
  left: {
    left: sizes.screenWidth * 0.03,
  },
  content: {
    padding: sizes.screenHeight * 0.05,
    alignItems: 'center',
    left: sizes.screenWidth * 0.03,
  },
  heading: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    textAlign: 'center',
    width: sizes.screenWidth * 0.6,
  },
  text: {
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.87,
    textAlign: 'center',
    fontWeight: '500',
  },
  padding: {
    paddingLeft: sizes.screenWidth * 0.1,
    paddingRight: sizes.screenWidth * 0.1,
  },
  top: {
    marginTop: sizes.screenHeight * 0.09,
  },
  imageView: {
    marginTop: sizes.screenHeight * 0.01,
    alignSelf: 'center',
  },
  registerTop: {
    marginTop: sizes.screenHeight * 0.01,
  },
  light: {
    color: colors.white,
  },
  dark: {
    color: colors.black,
  },
  darkBtn: {
    backgroundColor: colors.disabledBg2,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.65,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: sizes.screenWidth * 0.3,
  },
  font: {
    fontSize: fontSize.medium,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
