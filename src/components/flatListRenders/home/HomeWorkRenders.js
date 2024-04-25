import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Responsive } from '../../../assets/theme/Layout';
import Icons from '../../../constants/Icons';
import { COLORS, FONTS } from '../../../assets/theme/Theme';

const HomeWorkRenders = ({ item }) => {
    console.log(item);
    return (
        <View style={[styles.homeWorkBox, { backgroundColor: item.subjectStatus === 'completed' ? COLORS.lightSuccess : COLORS.lightWarning }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={Icons.homeWorkImage} style={styles.homeWorkImage} />
                    <View>
                        <Text style={styles.homeWorkSubject}>
                            Financial Accounting
                        </Text>
                        <Text style={styles.homeWorkType}>
                            Accounting Basics
                        </Text>
                    </View>
                </View>
                <Image source={item.subjectStatus === 'completed' ? Icons.completed : Icons.pending} style={styles.homeWorkStatusIcon} />
            </View>
        </View>
    )
}

export default HomeWorkRenders

const styles = StyleSheet.create({
    homeWorkBox: {
        paddingHorizontal: Responsive.width(10),
        paddingVertical: Responsive.height(10),
        borderRadius: 16
    },
    homeWorkImage: {
        width: Responsive.width(45),
        height: Responsive.height(45),
        resizeMode: 'contain',
        marginRight: Responsive.width(15)
    },
    homeWorkSubject: {
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: Responsive.width(12),
        color: COLORS.mediumBlack
    },
    homeWorkType: {
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: Responsive.width(16),
        color: COLORS.mediumBlack
    },
    homeWorkStatusIcon: {
        width: Responsive.width(20),
        height: Responsive.height(20),
        resizeMode: 'contain'
    }
})