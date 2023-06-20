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
    fontSize: fontSize.h6,
    fontWeight: '500',
    left: sizes.screenWidth * 0.3,
  },
  container: {
    height: sizes.screenHeight * 0.15,
    paddingRight:sizes.screenHeight*0.01,
    marginVertical: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  rightAction: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: sizes.screenHeight * 0.15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dismissImg: {
    height: sizes.screenHeight * 0.075,
    width: sizes.screenWidth * 0.15,
  },
  bottomTitle: {
    // bottom: sizes.screenHeight * 0.008,
    left: sizes.screenWidth * 0.02,
    fontWeight: 'bold',
  },
  durationTitle: {
    bottom: sizes.screenHeight * 0.025,
    left: sizes.screenWidth * 0.68,
  },
  content: {
    bottom: sizes.screenHeight * 0.025,
    left: sizes.screenWidth * 0.02,
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
  },
});
