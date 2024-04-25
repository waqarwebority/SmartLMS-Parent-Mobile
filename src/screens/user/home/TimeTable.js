import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import ApplicationHeader from '../../../components/headers/ApplicationHeader'
import { Responsive } from '../../../assets/theme/Layout'
import { commonStyles } from '../../../assets/theme/Styles'
import { COLORS, FONTS } from '../../../assets/theme/Theme'
const todayTimeTableData = [
    { id: '1', subjectName: 'Financial Accounting', subjectWork: 'Video Conferencing', subjectTime: '10:00 AM', subjectDuration: '60 Min', subjectStatus: 'completed' },
    { id: '2', subjectName: 'Financial Accounting', subjectWork: 'Accounts Statements', subjectTime: '10:00 AM', subjectDuration: '60 Min', subjectStatus: 'pending' },
    { id: '3', subjectName: 'Financial Accounting', subjectWork: 'Finance', subjectTime: '10:00 AM', subjectDuration: '60 Min', subjectStatus: 'completed' },
]


const TimeTable = () => {
    const renderTodayTimeTable = ({ item }) => {
        return (
            <View style={styles.singleTimeTableBox}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={[styles.borderLeft,
                    { backgroundColor: item.subjectStatus === 'completed' ? COLORS.suceess : COLORS.warning, }]} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.subjectName}>{item.subjectName}</Text>
                        <Text style={styles.subjectWork}>{item.subjectWork}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subjectTime}>
                        {item.subjectTime}
                    </Text>
                    <Text style={styles.subjectDuration}>
                        {item.subjectDuration}
                    </Text>
                </View>
            </View>


        )
    }
    return (
        <View style={styles.container}>
            <ApplicationHeader Back title={'TimeTable'} />
            <ScrollView>
                <View>
                    <View style={styles.timeTableBox}>
                        <Text style={[commonStyles.sixteenGilroy700, { color: COLORS.darkBlack }]}>
                            Today
                        </Text>
                        <View style={{ marginTop: Responsive.height(16) }}>
                            <FlatList
                                data={todayTimeTableData}
                                renderItem={renderTodayTimeTable}
                                keyExtractor={(item) => item.id}
                                // contentContainerStyle={styles.flatListContainer}
                                ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{ marginTop: Responsive.height(15) }} />
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default TimeTable

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Responsive.width(20),
        backgroundColor: COLORS.white,
        flex: 1
    },
    timeTableBox: {
        paddingVertical: Responsive.height(20),
    },
    singleTimeTableBox: {
        paddingVertical: Responsive.height(20),
        paddingHorizontal: Responsive.width(15),
        backgroundColor: COLORS.lightGrey,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subjectName: {
        fontFamily: FONTS.GilroyBold700,
        fontSize: Responsive.width(12),
        color: COLORS.mediumBlack
    },
    subjectWork: {
        fontFamily: FONTS.GilroyBold700,
        fontSize: Responsive.width(16),
        color: COLORS.darkBlack,
    },
    subjectTime: {
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: Responsive.width(12),
        color: COLORS.mediumBlack,
        textAlign: 'right',
        flex: 1,
        backgroundColor: 'red'
    },
    subjectDuration: {
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: Responsive.width(10),
        color: COLORS.regularBlack,
        textAlign: 'right',
        flex: 1,
    },
    borderLeft: {
        borderRadius: 5,
        width: 4,
        marginRight: Responsive.width(15)
    }

})