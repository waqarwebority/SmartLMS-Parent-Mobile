import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Platform,
    TouchableOpacity,
    Image,
} from "react-native";
import { Responsive } from "../../assets/theme/Layout";
import { COLORS, FONTS } from "../../assets/theme/Theme";
import { commonStyles } from "../../assets/theme/Styles";
import Icons from "../../constants/Icons";
import { reporter } from "../../../metro.config";

export default function ApplicationPasswordInput({
    label,
    name,
    val,
    autoCapitalize,
    onchange = () => { },
    keyboardType,
    placeholderText,
    disable,
    maxLength,
    addressinputStyle,
    type,
    wordCounter,
    inputStyle,
    labelTextStyle,
    optionalInputField,
    onError,
    onBlur,
    showError,
    errors,
}) {
    const [focused, setFocused] = useState(false);
    const customOnBlur = (e) => {
        setFocused(false);
        onBlur(e);
    };
    const customOnFocus = () => {
        setFocused(true);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <View style={styles.labelTextRow}>
                {label ? (
                    <Text style={{ ...styles.labelTextStyle, ...labelTextStyle }}>
                        {label}
                        {optionalInputField && (
                            <Text
                                optionalInputField
                                style={[commonStyles.tenWhite600, styles.optionalInputField]}
                            >
                                {" "}
                                (optional)
                            </Text>
                        )}
                    </Text>
                ) : null}

                {wordCounter && <Text>32/100</Text>}
            </View>
            <View style={styles.flexView}>


                <View style={styles.defaultInputIcon}>
                    <Image source={Icons.key} style={styles.key} />
                </View>




                <TextInput
                    autoComplete={undefined}
                    style={[
                        {
                            ...styles.commonInputStyle,
                            borderWidth: 1,
                            color: COLORS.mediumBlack,
                            borderColor: errors
                                ? "#F6CCD0"
                                : focused
                                    ? "#ABCDFE"
                                    : type === undefined
                                        ? "#F2F2F4"
                                        : "#F2F2F4",
                            backgroundColor:
                                type == undefined
                                    ? focused == true
                                        ? "#ffffff"
                                        : COLORS.thinLightBlack
                                    : "#ffffff",
                            textAlignVertical: "auto",
                            paddingLeft: Responsive.width(45),
                            paddingRight: Responsive.width(40),
                            borderRadius: Responsive.height(14),
                            ...addressinputStyle,
                        },
                    ]}
                    onBlur={(e) => customOnBlur(e)}
                    onFocus={customOnFocus}
                    onChangeText={(text) => onchange(text)}
                    keyboardType={keyboardType}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize={autoCapitalize}
                    placeholder={placeholderText}
                    maxLength={maxLength}
                    placeholderTextColor={COLORS.lightBlack}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.eyeIcon}
                    onPress={togglePasswordVisibility}
                >
                    <Image
                        source={isPasswordVisible ? Icons.eye : Icons.closeEye}
                        style={{
                            width: Responsive.width(22),
                            height: Responsive.height(22),
                            zIndex: 9,
                        }}
                    />
                </TouchableOpacity>
            </View>
            {onError ? (
                <Text
                    style={[
                        commonStyles.twelveWhite500,
                        {
                            color: "#DC3546",
                        },
                    ]}
                >
                    {onError}
                </Text>
            ) : showError ? (
                <Text
                    style={[
                        commonStyles.twelveWhite500,
                        {
                            color: "#DC3546",
                        },
                    ]}
                >
                    {showError}
                </Text>
            ) : null}
        </View>
    );
}
const styles = StyleSheet.create({
    inlineStyle: {
        paddingVertical: Responsive.height(8),
        fontSize: Responsive.font(16),
        color: COLORS.blackOpacity80,
        flex: 1,
    },
    labelTextStyle: {
        paddingBottom: Responsive.height(6),
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: Responsive.font(14),
        color: "#3F4254",
    },
    flexView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        width: "100%",
    },
    commonInputStyle: {
        width: "100%",
        borderRadius: 8,
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.PoppinsRegular400,
        fontSize: Responsive.font(14),
        height:
            Platform.OS == "ios" ? Responsive.height(50) : Responsive.height(50),
    },
    optionalInputField: {
        color: "#84859A",
    },
    labelTextRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    eyeIcon: {
        position: "absolute",
        right: Responsive.width(15),
    },
    key: {
        width: Responsive.width(20),
        height: Responsive.height(20)
    },
    defaultInputIcon: {
        position: 'absolute',
        zIndex: 1,
        left: Responsive.width(15)
    }
});
