import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icons from '../../constants/Icons'
import { Responsive } from '../../assets/theme/Layout'
import { COLORS, FONTS } from '../../assets/theme/Theme'

const ApplicationHeader = ({ title, Back, largeTitle }) => {
    return (
        <View style={styles.headerContainer}>
            {
                Back ? <Image source={Icons.leftArrowWithBG} style={styles.leftArrowWithBG} />
                    : null
            }
            <Text style={styles.headerTitle}>{title}</Text>
            {
                largeTitle ? <Text style={styles.largeTitle}>
                    {largeTitle}
                </Text>
                    : null
            }
        </View>
    )
}

export default ApplicationHeader

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: Responsive.height(10),
        paddingHorizontal: Responsive.width(20),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:COLORS.white
    },
    leftArrowWithBG: {
        width: Responsive.width(40),
        height: Responsive.height(40),
        marginRight: Responsive.width(20),
        resizeMode:'contain'
    },
    headerTitle: {
        color: COLORS.darkBlack,
        fontFamily: FONTS.GilroyBold700,
        fontSize: Responsive.width(16),
        lineHeight: 20
    },
    largeTitle: {
        fontSize: Responsive.width(24),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.darkBlack
    }
})