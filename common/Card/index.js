import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

export default function Card(props){
  return(
    <View style={style.card}>
        <Text style={style.card_header}>{props.title}</Text>
        <View style={style.card_content}>
          {props.children}
        </View>
      </View>
  )
}