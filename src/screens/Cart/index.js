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
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';

export default function Cart() {
  const [dark, setDark] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);

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

  const handleCheckout = () => {
    // alert("ok")
    setModalVisible(true);
  };
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
                <Text style={!dark ? styles.cardHead : styles.cardHeadDark}>
                  {item.title}
                </Text>
                <Text style={!dark ? styles.cardText : styles.cardTextDark}>
                  {item.product}
                </Text>
                <Text style={!dark ? styles.priceText : styles.priceTextDark}>
                  {item.price}
                </Text>
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
                  <Text style={!dark ? styles.quantity : styles.quantityDark}>
                    {quantity}
                  </Text>
                </View>
                <View style={styles.plusView}>
                  <TouchableOpacity>
                    <View>
                      <Image
                        source={!dark ? images.plus : images.plusLight}
                        style={styles.plus}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
      })}
      <View style={styles.btnTop}>
        <TouchableOpacity onPress={handleCheckout}>
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
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={[
            {backgroundColor: !dark ? colors.white : colors.black},
            styles.modalView,
          ]}>
          <View style={styles.padding2}>
            <View style={styles.modalRow}>
              <Text
                style={[
                  {color: !dark ? colors.black : colors.white},
                  styles.checkoutText,
                ]}>
                Checkout
              </Text>
              <View style={styles.crossModal}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View>
                    <Image source={images.cross} style={styles.cross} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.lineTop}
              />
            </View>
            <View style={[styles.top]}>
              <TouchableOpacity style={styles.modalRow}>
                <Text
                  style={[
                    {color: !dark ? colors.black : colors.white},
                    styles.btnText,
                  ]}>
                  Delivery
                </Text>
                <View style={[styles.modalRow, styles.buttonLeft]}>
                  <Text
                    style={[
                      {color: !dark ? colors.price : colors.purple},
                      styles.methodText,
                    ]}>
                    {' '}
                    Select Method{' '}
                  </Text>
                  <Image
                    source={!dark ? images.rightArrow : images.rightArrowDark}
                    style={styles.rightArrow}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonTop}>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.innerLine}
              />
              <View style={[styles.paymentTop]}>
                <TouchableOpacity style={styles.modalRow}>
                  <Text
                    style={[
                      {color: !dark ? colors.black : colors.white},
                      styles.btnText,
                    ]}>
                    Payment
                  </Text>
                  <View style={[styles.modalRow, styles.buttonLeft]}>
                    <Image source={images.payment} style={styles.payment} />
                    <Image
                      source={!dark ? images.rightArrow : images.rightArrowDark}
                      style={styles.rightArrow2}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonTop2}>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.innerLine}
              />
              <View style={[styles.paymentTop]}>
                <TouchableOpacity style={styles.modalRow}>
                  <Text
                    style={[
                      {color: !dark ? colors.black : colors.white},
                      styles.btnText,
                    ]}>
                    Promo Code
                  </Text>
                  <View style={[styles.modalRow, styles.buttonLeft2]}>
                    <Text
                      style={[
                        {color: !dark ? colors.price : colors.purple},
                        styles.methodText,
                      ]}>
                      Pick discount
                    </Text>
                    <Image
                      source={!dark ? images.rightArrow : images.rightArrowDark}
                      style={styles.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonTop3}>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.innerLine}
              />
              <View style={[styles.paymentTop]}>
                <TouchableOpacity style={styles.modalRow}>
                  <Text
                    style={[
                      {color: !dark ? colors.black : colors.white},
                      styles.btnText,
                    ]}>
                    Total Cost
                  </Text>
                  <View style={[styles.modalRow, styles.buttonLeft3]}>
                    <Text
                      style={[
                        {color: !dark ? colors.price : colors.purple},
                        styles.methodText,
                      ]}>
                      {' '}
                      $135.9{' '}
                    </Text>
                    <Image
                      source={!dark ? images.rightArrow : images.rightArrowDark}
                      style={styles.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.padding2, styles.contentTop]}>
            <Image
              source={!dark ? images.line : images.darkLine}
              style={styles.innerLine}
            />
            <Text style={styles.content}>
              By placing an order you agree to our Terms And Conditions.
            </Text>
          </View>
          <View style={styles.modalButton}>
            <TouchableOpacity onPress={handleCheckout}>
              <View style={styles.pinkBtn}>
                <Image
                  source={!dark ? images.cartIcon : images.cartIconDark}
                  style={styles.cartIcon}
                />
                <Text
                  style={[
                    {color: !dark ? colors.white : colors.black},
                    styles.font,
                  ]}>
                  Place Order
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ******************************** Filter modal ******************************** */}
      {/* <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={[
            {backgroundColor: !dark ? colors.white : colors.black},
            styles.modalView,
          ]}>
          <View style={styles.padding2}>
            <View style={styles.modalRow}>
              <Text
                style={[
                  {color: !dark ? colors.black : colors.white},
                  styles.checkoutText,
                ]}>
                Filters
              </Text>
              <View style={styles.crossModal2}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View>
                    <Image source={images.cross} style={styles.cross} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.lineTop}
              />
            </View>
            <View style={[styles.top]}>
              
              <TouchableOpacity style={styles.modalRow}>
                <Text
                  style={[
                    {color: !dark ? colors.black : colors.white},
                    styles.btnText,
                  ]}>
                  Category{' '}
                </Text>
                <View style={[styles.modalRow, styles.buttonLeft]}>
                  <Text
                    style={[
                      {color: !dark ? colors.price : colors.purple},
                      styles.methodText,
                    ]}>
                    Jacket, Coat
                  </Text>
                  <Image
                    source={!dark ? images.rightArrow : images.rightArrowDark}
                    style={styles.rightArrow}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.sizeLineTop}>
                <Image
                  source={!dark ? images.line : images.darkLine}
                  style={styles.innerLine}
                />
              </View>
            <View style={styles.buttonTop}>
              
              <View style={styles.colorLineTop}>
                <Image
                  source={!dark ? images.line : images.darkLine}
                  style={styles.innerLine}
                />
              </View>
              <View style={[styles.paymentTop]}>
                <TouchableOpacity style={styles.modalRow}>
                  <Text
                    style={[
                      {color: !dark ? colors.black : colors.white},
                      styles.btnText,
                    ]}>
                    Size
                  </Text>
                  <View style={[styles.modalRow, styles.mediumBtn]}>
                    <Text
                      style={[
                        {color: !dark ? colors.price : colors.purple},
                        styles.methodText,
                      ]}>
                      Small, Medium
                    </Text>
                    <Image
                      source={!dark ? images.rightArrow : images.rightArrowDark}
                      style={styles.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.colorTop]}>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.colorLineTop}
              />
              <TouchableOpacity style={styles.modalRow}>
                <Text
                  style={[
                    {color: !dark ? colors.black : colors.white},
                    styles.btnText,
                  ]}>
                  Color
                </Text>
                <View style={[styles.modalRow, styles.mediumBtn]}>
                  <Image
                    source={images.colorDark}
                    style={styles.colorImg}
                  />
                  <Image
                    source={!dark ? images.rightArrow : images.rightArrowDark}
                    style={styles.colorArrow}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.priceViewTop}>
              <Image
                source={!dark ? images.line : images.darkLine}
                style={styles.innerLine}
              />
              <View style={[styles.paymentTop]}>
                <TouchableOpacity style={styles.modalRow}>
                  <Text
                    style={[
                      {color: !dark ? colors.black : colors.white},
                      styles.btnText,
                    ]}>
                    Price range
                  </Text>
                  <View style={[styles.modalRow, styles.priceRangeView]}>
                    <Text
                      style={[
                        {color: !dark ? colors.price : colors.purple},
                        styles.methodText,
                      ]}>
                      $80 - $150
                    </Text>
                    <Image
                      source={!dark ? images.rightArrow : images.rightArrowDark}
                      style={styles.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.filterBtnView}>
            <TouchableOpacity onPress={handleCheckout}>
              <View style={styles.filterBtn}>
                <Text
                  style={[
                    {color: !dark ? colors.white : colors.black},
                    styles.font,
                  ]}>
                  Apply Filters
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
}
