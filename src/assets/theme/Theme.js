import { Platform } from "react-native";

export const COLORS = {
    white: "#FFFFFF",
    darkBlack: '#181C32',
    mediumBlack: '#3F4254',
    regularBlack: '#84859A',
    lightBlack: '#B5B5C3',
    thinLightBlack: '#F7F8FA',
    darkPurple: '#8C75E8',
    mediumPurple: '#F3F1FF',
    lightPurple: '#B8B0EE',
    thinPurple: '#EBEDF3',
    primary: '#3D8BFD',
    mediumPrimary: 'rgba(61, 139, 253, 0.6)',
    lightPrimary: 'rgba(61, 139, 253, 0.12)',
    darkOrange: '#EEB077',
    lightOrange: 'rgba(253, 166, 76, 0.12)',
    suceess: '#24C26B',
    danger: '#E74442',
    warning: '#FFC107',
    lightWarning: 'rgba(255, 193, 7, 0.15)',
    lightGrey: '#FAFAFA',
    lightSuccess:'#0DB9691A'

};

export const FONTS = {
    GilroyThin200: Platform.select({
        android: "Gilroy-Thin",
        ios: "Gilroy-Thin",
    }),
    GilroyLight300: Platform.select({
        android: "Gilroy-Light",
        ios: "Gilroy-Light",
    }),
    GilroyRegularItalic400: Platform.select({
        android: "Gilroy-RegularItalic",
        ios: "Gilroy-RegularItalic",
    }),
    GilroyRegular400: Platform.select({
        android: "Gilroy-Regular",
        ios: "Gilroy-Regular",
    }),
    GilroyMedium500: Platform.select({
        android: "Gilroy-Medium",
        ios: "Gilroy-Medium",
    }),
    GilroyMediumItalic500: Platform.select({
        android: "Gilroy-MediumItalic",
        ios: "Gilroy-MediumItalic",
    }),
    GilroySemiBold600: Platform.select({
        android: "Gilroy-SemiBold",
        ios: "Gilroy-SemiBold",
    }),
    GilroyBold700: Platform.select({
        android: "Gilroy-Bold",
        ios: "Gilroy-Bold",
    }),
    GilroyExtraBold800: Platform.select({
        android: "Gilroy-ExtraBold",
        ios: "Gilroy-ExtraBold",
    }),
    PoppinsMedium500: Platform.select({
        android: "Poppins-Medium",
        ios: "Poppins-Medium",
    }),
    PoppinsRegular400: Platform.select({
        android: "Poppins-Regular",
        ios: "Poppins-Regular",
    }),
};

const appTheme = { COLORS, FONTS };

export default appTheme;