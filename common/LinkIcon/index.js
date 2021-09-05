import React from 'react'
import {TouchableOpacity, Linking } from 'react-native'

export default function LinkIcon(props) {
  return (
    <TouchableOpacity onPress={() => props.url!==undefined ? Linking.openURL(props.url) : {}}>
      {props.children}
    </TouchableOpacity>
  )
}