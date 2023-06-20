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
  cardHeadDark: {
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
  cardTextDark: {
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
  priceTextDark: {
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
  quantityDark: {
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
  priceView: {
    left: sizes.screenWidth * 0.12,
    backgroundColor: '#923232',
    padding: sizes.screenWidth * 0.009,
    borderRadius: sizes.screenWidth * 0.01,
  },
  crossModal: {
    justifyContent: 'center',
    left: sizes.screenWidth * 0.55,
  },
  checkoutText: {
    fontWeight: 'bold',
    fontSize: fontSize.h5,
  },
  modalView: {
    height: sizes.screenHeight * 0.9,
    width: sizes.screenWidth,
    right: sizes.screenWidth * 0.05,
    top: sizes.screenHeight * 0.3,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
  },
  padding2: {padding: sizes.screenHeight * 0.04},
  modalRow: {flexDirection: 'row', alignItems: 'center'},
  lineTop: {
    top: sizes.screenHeight * 0.03,
    right: sizes.screenWidth * 0.4,
  },
  innerLine: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },
  top: {
    top: sizes.screenHeight * 0.05,
  },
  paymentTop: {
    top: sizes.screenHeight * 0.03,
  },
  buttonTop: {
    top: sizes.screenHeight * 0.08,
  },
  buttonTop2: {
    top: sizes.screenHeight * 0.14,
  },

  buttonTop3: {
    top: sizes.screenHeight * 0.19,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: fontSize.h6,
  },
  rightArrow: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.03,
    left: sizes.screenWidth * 0.03,
  },
  rightArrow2: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.03,
    left: sizes.screenWidth * 0.266,
  },
  payment: {
    height: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.07,
    left: sizes.screenWidth * 0.23,
  },
  buttonLeft: {
    left: sizes.screenWidth * 0.35,
  },
  buttonLeft2: {
    left: sizes.screenWidth * 0.27,
  },
  buttonLeft3: {
    left: sizes.screenWidth * 0.45,
  },
  methodText: { fontSize: fontSize.h6, fontWeight: 'bold'},
  discountText: {
    color: colors.price,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
  content: {
    color: colors.gray,
    textAlign: 'center',
    top: sizes.screenHeight * 0.02,
  },
  contentTop: {
    top: sizes.screenHeight * 0.16,
    width: sizes.screenWidth * 0.8,
    left: sizes.screenWidth * 0.1,
  },
  modalButton: {
    top: sizes.screenHeight * 0.16,
  },
});
