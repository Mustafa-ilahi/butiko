import React, {useState} from 'react';
import {styles} from './style';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function Cart() {
  const [dark, setDark] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItems] = useState([
    {
      title: 'Store Name',
      product: 'Product Brand',
      price: '$57.5',
      sizeImg: images.small,
      image: images.p1,
      colorImg: images.circleP1,
    },
    {
      title: 'Store Name',
      product: 'Product Brand',
      price: '$57.5',
      image: images.p2,
      sizeImg: images.small,
      colorImg: images.circleP2,
    },
    {
      title: 'Store Name',
      product: 'Product Brand',
      price: '$57.5',
      image: images.p3,
      sizeImg: images.small,
      colorImg: images.circleP3,
    },
    {
      title: 'Store Name',
      product: 'Product Brand',
      price: '$57.5',
      image: images.p4,
      sizeImg: images.small,
      colorImg: images.circleP4,
    },
  ]);
  return (
    <SafeAreaView>
      <View style={styles.padding}>
        <View style={styles.row}>
          <Image
            source={!dark ? images.logo : images.logoDark}
            style={styles.headerLogo}
          />
          <View style={styles.right}>
            <TouchableOpacity>
              <Image
                source={!dark ? images.notifIcon : images.notifLight}
                style={styles.notifIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={!dark ? images.shopIcon : images.shopLight}
              style={styles.notifIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {cartItem?.map((item, index) => {
        return (
          <ScrollView key={index}>
            <View style={styles.rowView}>
              <View style={styles.cardView}>
                <Image source={item.image} style={styles.p1} />
                <Image source={item.sizeImg} style={styles.small} />
                <Image source={item.colorImg} style={styles.circle} />
              </View>
              <View style={styles.contentView}>
                <Text style={!dark ?styles.cardHead :styles.cardHeadDark}>{item.title}</Text>
                <Text style={!dark ? styles.cardText: styles.cardTextDark}>{item.product}</Text>
                <Text style={!dark ? styles.priceText : styles.priceTextDark}>{item.price}</Text>
              </View>
              <View style={styles.crossView}>
                <TouchableOpacity>
                  <View>
                    <Image source={images.cross} style={styles.cross} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonView}>
                <View style={styles.minusView}>
                  <TouchableOpacity>
                    <View>
                      <Image source={images.minus} style={styles.minus} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={!dark ? styles.quantity: styles.quantityDark}>{quantity}</Text>
                </View>
                <View style={styles.plusView}>
                  <TouchableOpacity>
                    <View>
                      <Image source={!dark ? images.plus : images.plusLight} style={styles.plus} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
      })}
      <View style={styles.btnTop}>
        <TouchableOpacity>
          <View style={styles.pinkBtn}>
            <Image source={images.checkout} style={styles.cartIcon} />
            <Text style={[{color: colors.white}, styles.font]}>
              Go to Checkout
            </Text>
            <View style={styles.priceView}>
              <Text style={[{color: colors.white}, styles.font]}>$135.96</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
