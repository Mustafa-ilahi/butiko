import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    padding: sizes.screenHeight * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '500',
    left: sizes.screenWidth * 0.2,
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
  btnTop: {
    top: sizes.screenHeight * 0.85,
    // paddingBottom: sizes.screenHeight * 0.02,
    position:'absolute',
    left:sizes.screenWidth*0.1,
    zIndex: 999,
  },
});
