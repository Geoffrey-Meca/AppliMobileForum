const debug = true
import React from 'react'
import { Text, View } from 'react-native'

export default function AffichageComment(data) {
if (debug) {
    console.log(data)
}
  return (
    <View>
        <Text>{data}</Text>
    </View>
  )
}
