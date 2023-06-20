import React, {useState} from 'react';
import {styles} from './style';
import {SafeAreaView, Text, View} from 'react-native';
import {colors, sizes} from '../../services';
import Header from '../../components/Header';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';

export default function CreditCard() {
  const [dark, setDark] = useState(false);
  _onChange => form => console.log(form);

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Header darkStatus={dark} />
        <Text style={styles.headerText}>Credit / Debit card</Text>
      </View>
      <View>
        <CreditCardInput onChange={this._onChange} requiresName/>
        {/* <Text style={{color:'red'}}>ssssssssss</Text> */}
      </View>
    </SafeAreaView>
  );
}