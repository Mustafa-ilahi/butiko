import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  heading: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dark: {
    color: '#323F4B',
  },
  light: {
    color: colors.black,
  },
  padding: {
    padding: sizes.screenWidth * 0.05,
    top: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
  },
  smallText: {
    color: colors.gray,
    fontSize: fontSize.smallM,
    textAlign: 'center',
  },
  gray: {
    color: colors.gray,
  },
  white: {
    color: colors.white,
  },
  paddingSM: {
    top: sizes.screenHeight * 0.02,
  },
  purpleBtn: {
    backgroundColor: colors.purple,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
    borderRadius: sizes.screenWidth * 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pinkBtn: {
    backgroundColor: colors.pink,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.8,
    borderRadius: sizes.screenWidth * 0.3,
    justifyContent: 'center',
  },
  font: {
    fontSize: fontSize.medium,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  cartIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.06,
    right: sizes.screenWidth * 0.05,
  },
  btnTop: {
    top: sizes.screenHeight * 0.1,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  backButton: {
    alignSelf: 'center',
    fontWeight: '500',
  },
  backIcon: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.05,
    right: sizes.screenWidth * 0.02,
  },
  homeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText:{
    color:colors.white
  }
});
