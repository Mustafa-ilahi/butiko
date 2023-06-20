import React, {useState} from 'react';
import {
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, fontSize} from '../../services';
import Swipelist from 'react-native-swipeable-list-view';

export default function NotifcationsScreen() {
//   const [dark, setDark] = useState(true);
  const [dark, setDark] = useState(false);
  const data = [
    {
      title: 'New Collection',
      duration: '30 mintues ago',
      content:
        'Exciting news! Discover our latest collection now available at Fashion Haven. Get ready to update your wardrobe with trendy styles and fresh arrivals',
    },
    {
      title: 'Exclusive Promo Code',
      duration: '1 hour ago',
      content:
        "Congratulations! You've unlocked an exclusive promo code. Use code 'FASHIONISTA20' at checkout to enjoy a 20% discount on your next purchase. Happy shopping!",
    },
    {
      title: 'Order Confirmation',
      duration: '3 hours ago',
      content:
        "Thank you for shopping with Fashion Haven! Your order #123456 has been successfully placed. We're preparing your items for shipment. Stay tuned for further updates!",
    },
    {
      title: 'Personalized Recommendation',
      duration: '1 day ago',
      content:
        "Hey Jane, based on your previous purchases and preferences, we think you'll love these new arrivals. Check them out and let your style shine!",
    },
    {
      title: 'Restock Notification',
      duration: '1 day ago',
      content:
        'Good news! Your favorite item is back in stock at Fashion Haven. Be quick to secure yours before it sells out again. Happy shopping!',
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Header darkStatus={dark} />
        <Text
          style={[
            {color: !dark ? colors.black : colors.white},
            styles.headerText,
          ]}>
          Activities
        </Text>
      </View>
      <Swipelist
        data={data}
        renderRightItem={(data, index) => (
          <View
            key={index}
            style={[
              {backgroundColor: dark ? colors.black : colors.white},
              styles.container,
            ]}>
            <Text style={[styles.bottomTitle, {color: colors.pink}]}>
              {data.title}
            </Text>
            <Text style={[styles.durationTitle, {color: colors.gray}]}>
              {data.duration}
            </Text>
            <Text style={[styles.content, {color: colors.gray}]}>
              {data.content}
            </Text>
          </View>
        )}
        renderHiddenItem={(data, index) => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.rightAction, {backgroundColor: colors.pink}]}
              onPress={() => {
                // Alert.alert('Delete?');
              }}>
              <Image source={images.dismiss} style={styles.dismissImg} />
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={100}
      />
    </SafeAreaView>
  );
}
