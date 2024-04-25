import { Platform, StyleSheet } from "react-native";
import { Responsive } from "./Layout";
import { COLORS, FONTS } from "./Theme";

export const commonStyles = StyleSheet.create({
    nineGilroy600: {
        fontSize: Responsive.font(9),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
    
      tenGilroy400: {
        fontSize: Responsive.font(10),
        fontFamily: FONTS.GilroyRegular400,
        color: COLORS.mediumBlack,
      },
      tenGilroy500: {
        fontSize: Responsive.font(10),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      tenGilroy600: {
        fontSize: Responsive.font(10),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      tenGilroy700: {
        fontSize: Responsive.font(10),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
    
      twelveGilroy400: {
        fontSize: Responsive.font(12),
        fontFamily: FONTS.GilroyRegular400,
        color: COLORS.mediumBlack,
      },
      twelveGilroy500: {
        fontSize: Responsive.font(12),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      twelveGilroy600: {
        fontSize: Responsive.font(12),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      twelveGilroy700: {
        fontSize: Responsive.font(12),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
    
      fourteenGilroy400: {
        fontSize: Responsive.font(14),
        fontFamily: FONTS.GilroyRegular400,
        color: COLORS.mediumBlack,
      },
      fourteenGilroy500: {
        fontSize: Responsive.font(14),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      fourteenGilroy600: {
        fontSize: Responsive.font(14),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      fourteenGilroy700: {
        fontSize: Responsive.font(14),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
    
      sixteenGilroy400: {
        fontSize: Responsive.font(16),
        fontFamily: FONTS.GilroyRegular400,
        color: COLORS.mediumBlack,
      },
      sixteenGilroy500: {
        fontSize: Responsive.font(16),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      sixteenGilroy600: {
        fontSize: Responsive.font(16),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      sixteenGilroy700: {
        fontSize: Responsive.font(16),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
      sixteenGilroy800: {
        fontSize: Responsive.font(16),
        fontFamily: FONTS.GilroyExtraBold800,
        color: COLORS.mediumBlack,
      },
    
      eighteenGilroy500: {
        fontSize: Responsive.font(18),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      eighteenGilroy600: {
        fontSize: Responsive.font(18),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      eighteenGilroy700: {
        fontSize: Responsive.font(18),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
    
      twentyGilroy400: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroyRegular400,
        color: COLORS.mediumBlack,
      },
      twentyGilroy500: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      twentyGilroy600: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      twentyGilroy600: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      twentyGilroy700: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
      twentyGilroy800: {
        fontSize: Responsive.font(20),
        fontFamily: FONTS.GilroyExtraBold800,
        color: COLORS.mediumBlack,
      },
    
      twentyTwoGilroy700: {
        fontSize: Responsive.font(22),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
    
      twentyFourGilroy600: {
        fontSize: Responsive.font(24),
        fontFamily: FONTS.GilroySemiBold600,
        color: COLORS.mediumBlack,
      },
      twentyFourGilroy700: {
        fontSize: Responsive.font(24),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
      twentyFourGilroy500: {
        fontSize: Responsive.font(24),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
    
      twentyEightGilroy700: {
        fontSize: Responsive.font(28),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
      fortyGilroy500: {
        fontSize: Responsive.font(40),
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.mediumBlack,
      },
      fortyGilroy700: {
        fontSize: Responsive.font(40),
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.mediumBlack,
      },
      BackendcrossErrorImage: {
        width: Responsive.width(24),
        height: Responsive.height(24),
        resizeMode: 'contain',
        tintColor: COLORS.darkBlack
      },
      appShadow: {
        shadowColor: "#3333337a",
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: {
          height: Platform.select({
            ios: 2,
            android: 0,
          }),
          width: Platform.select({
            ios: 2,
            android: 2,
          }),
        },
        elevation: 6,
      },
      BackendErrorMessageBox: {
        backgroundColor: '#F8D7DA',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: Responsive.height(8),
        paddingHorizontal: Responsive.width(15),
        paddingVertical: Responsive.height(15),
        justifyContent: 'space-between',
        marginBottom: Responsive.height(15),
      },
});