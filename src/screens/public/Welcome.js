import React from 'react'
import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../constants/Images'
import Icons from '../../constants/Icons'
import { Responsive } from '../../assets/theme/Layout'
import { commonStyles } from '../../assets/theme/Styles'
import { COLORS } from '../../assets/theme/Theme'
import Button55W from '../../components/buttons/ApplicationButtons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation =useNavigation()
  return (
    <ImageBackground source={Images.onBoardingBG} style={styles.onBoardingBG}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1, paddingBottom: Responsive.height(65) }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Icons.logo} style={styles.logo} />
          <View style={{ marginTop: Responsive.height(15) }}><Text style={[commonStyles.sixteenGilroy700, { color: COLORS.white }]}>EduSync</Text></View>
        </View>
        <View>
          <Text style={[commonStyles.fortyGilroy500, { color: COLORS.white }]}>Join your</Text>
          <Text style={[commonStyles.fortyGilroy700, { color: COLORS.white }]}>Child'rzs <Text style={{ color: '#F4A900' }}>JOURNEY</Text></Text>
          <Text style={[commonStyles.fortyGilroy700, { color: COLORS.white }]}>
            of Learning &
          </Text>
          <Text style={[commonStyles.fortyGilroy700, { color: COLORS.white }]}>
            GROWTH!
          </Text>

          <View style={{ marginTop: Responsive.height(70) }}>
            <Button55W content="Get Started" onPress={()=>{
              navigation.navigate('Login')
            }} />
          </View>

        </View>
      </View>
    </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
  onBoardingBG: {
    flex: 1,
    paddingHorizontal: Responsive.width(20),
    zIndex:0
  },
  logo: {
    marginTop: Responsive.height(125),
    width: 80,
    height: 80,
    resizeMode: 'cover'
  }
})