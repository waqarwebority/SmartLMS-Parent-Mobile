import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Images from '../../../constants/Images'
import Icons from '../../../constants/Icons'
import { COLORS, FONTS } from '../../../assets/theme/Theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Responsive } from '../../../assets/theme/Layout'
import HomeWorkRenders from '../../../components/flatListRenders/home/HomeWorkRenders'

const homeWorkData = [
  { id: '1', subjectName: 'Financial Accounting', subjectWork: 'Video Conferencing', subjectStatus: 'completed' },
  { id: '2', subjectName: 'Financial Accounting', subjectWork: 'Accounts Statements', subjectStatus: 'pending' },
 
]

const Home = () => {
  const insets = useSafeAreaInsets()
  const renderHomeWork = ({ item }) => {
    return (
      <View style={styles.HomeWorkBox}>
        <Text>
          {item.id}
        </Text>
      </View>
    )
  }
  return (

    <ImageBackground source={Images.homeBG} style={styles.homeBG}>
      <View style={{ paddingTop: insets.top }} />

      <View style={styles.headerFlex}>
        <Image source={Icons.userImage} style={styles.userImage} />


        <View>
          <Text style={styles.userRelation}>
            Parent/Guardian
          </Text>
          <Text style={styles.userName}>
            Anurag Sharma
          </Text>
        </View>
      </View>

      <View style={styles.childFlexBox}>
        <View style={styles.childDetailsBox}>
          <Image source={Icons.childImage} style={styles.childImage} />
          <View>
            <Text style={styles.yourchildDetails}>
              Your Child Details
            </Text>
            <Text style={styles.childName}>
              Ajay Sharma
            </Text>
            <Text style={styles.childSchool}>
              St. Xavier Institute
            </Text>
          </View>
        </View>
        <Image source={Icons.childIcon} style={styles.childIcon} />
      </View>
      <View style={styles.HomeWorkStatusBox}>
        <Text style={styles.HWStatusH}>
          Homework Status
        </Text>
        <View style={{ marginTop: Responsive.height(16) }}>
          <FlatList
            data={homeWorkData}
            renderItem={({ item }) => <HomeWorkRenders item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
              return <View style={{ marginTop: Responsive.height(15) }} />;
            }}
          />

        </View>
      </View>
    </ImageBackground>

  )
}

export default Home

const styles = StyleSheet.create({
  homeBG: {
    height: Responsive.height(470),
    width: '100%',
  },
  userImage: {
    width: Responsive.width(45),
    height: Responsive.height(45),
    borderRadius: 22.5,
    borderColor: COLORS.white,
    borderWidth: 2,
    marginRight: Responsive.width(10)
  },
  userRelation: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.width(10),
    color: COLORS.mediumBlack,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(10)
  },
  userName: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.width(16),
    color: COLORS.darkBlack,
  },
  childFlexBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: Responsive.width(10),
    paddingVertical: Responsive.height(10),
    borderRadius: 20,
    marginHorizontal: Responsive.width(20),
    marginTop: Responsive.height(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  childDetailsBox: {
    flexDirection: 'row'
  },
  childImage: {
    width: Responsive.width(60),
    height: Responsive.height(60),
    resizeMode: 'contain',
    borderRadius: 16,
    marginRight: Responsive.width(15)
  },
  yourchildDetails: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.width(10),
    color: COLORS.lightBlack,
    textTransform: 'uppercase'
  },
  childName: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.width(16),
    color: COLORS.darkBlack,
    marginTop:Responsive.height(4)
  },
  childSchool: {
    fontFamily: FONTS.GilroySemiBold600,
    fontSize: Responsive.width(12),
    color: COLORS.regularBlack,
  },
  childIcon: {
    width: Responsive.width(30),
    height: Responsive.height(30),
    resizeMode: 'contain'
  },
  HomeWorkStatusBox: {
    paddingVertical: Responsive.height(20),
    marginHorizontal: Responsive.height(20)
  },
  HWStatusH: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: Responsive.width(18),
    color: COLORS.darkBlack,
  },
})