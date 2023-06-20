import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerLogo: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.32,
  },
  padding: {
    paddingTop: sizes.screenHeight * 0.04,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: sizes.screenWidth * 0.03,
  },
  rowView: {flexDirection: 'row'},
  notifIcon: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.05,
  },
  right: {
    left: sizes.screenWidth * 0.2,
  },
  cardView: {
    top: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.06,
  },
  p1: {
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.25,
  },
  small: {
    height: sizes.screenHeight * 0.035,
    width: sizes.screenWidth * 0.063,
    bottom: sizes.screenHeight * 0.07,
    left: sizes.screenWidth * 0.22,
  },
  circle: {
    height: sizes.screenHeight * 0.035,
    width: sizes.screenWidth * 0.063,
    bottom: sizes.screenHeight * 0.065,
    left: sizes.screenWidth * 0.22,
  },
  cardHead: {
    color: colors.black,
    fontSize: fontSize.h6,
    paddingBottom: sizes.screenHeight * 0.007,
    fontWeight: 'bold',
  },
  cardHeadDark:{
    color: colors.white,
    fontSize: fontSize.h6,
    paddingBottom: sizes.screenHeight * 0.007,
    fontWeight: 'bold',
  },
  cardText: {
    color: colors.black,
    fontSize: fontSize.large,
    paddingBottom: sizes.screenHeight * 0.007,
  },
  cardTextDark:{
    color: colors.disabledBg2,
    fontSize: fontSize.large,
    paddingBottom: sizes.screenHeight * 0.007,
  },
  priceText: {
    color: colors.price,
    fontSize: fontSize.large,
    paddingBottom: sizes.screenHeight * 0.007,
    fontWeight: 'bold',
  },
  priceTextDark:{
    color: '#A14895',
    fontSize: fontSize.large,
    paddingBottom: sizes.screenHeight * 0.007,
    fontWeight: 'bold',
  },
  contentView: {
    left: sizes.screenWidth * 0.15,
    top: sizes.screenHeight * 0.04,
  },
  crossView: {
    top: sizes.screenHeight * 0.04,
    left: sizes.screenWidth * 0.35,
  },
  cross: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.05,
  },
  buttonView: {
    top: sizes.screenHeight * 0.12,
    left: sizes.screenWidth * 0.05,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    color: colors.black,
    fontSize: fontSize.h5,
    // right: sizes.screenWidth * 0.01,
    fontWeight: 'bold',
  },
  quantityDark:{
    color: colors.white,
    fontSize: fontSize.h5,
    // right: sizes.screenWidth * 0.01,
    fontWeight: 'bold',
  },
  minus: {
    width: sizes.screenWidth * 0.03,
  },
  minusView: {
    left: sizes.screenWidth * 0.05,
  },
  plusView: {
    right: sizes.screenWidth * 0.06,
  },
  plus: {
    height: sizes.screenHeight * 0.015,
    width: sizes.screenWidth * 0.03,
  },
  pinkBtn: {
    backgroundColor: colors.pink,
    padding: sizes.screenWidth * 0.04,
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.06,
    right: sizes.screenWidth * 0.05,
  },
  font: {
    fontSize: fontSize.medium,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  btnTop: {
    top: sizes.screenHeight * 0.01,
  },
  priceView:{
    left:sizes.screenWidth*0.12,
    backgroundColor:'#923232',
    padding:sizes.screenWidth*0.009,
    borderRadius:sizes.screenWidth*0.01
  }
});
