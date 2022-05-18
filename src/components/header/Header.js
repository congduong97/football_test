import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VEBOtv</Text>
    </View>
  )
}

export default Header