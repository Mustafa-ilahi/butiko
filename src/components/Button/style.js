import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  whiteBtn: {
    backgroundColor: colors.white,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.65,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: sizes.screenWidth * 0.3,
  },
  pinkBtn: {
    backgroundColor: colors.pink,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.65,
    // borderWidth: 2,
    // borderColor: colors.borderColor,
    borderRadius: sizes.screenWidth * 0.3,
  },
  outline:{
    // backgroundColor: colors.pink,
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.65,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: sizes.screenWidth * 0.3,
  },
  darkOutline:{
    padding: sizes.screenWidth * 0.05,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.65,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: sizes.screenWidth * 0.3,
  },
  font: {
    fontSize: fontSize.medium,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
