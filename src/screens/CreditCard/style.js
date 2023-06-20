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
});
