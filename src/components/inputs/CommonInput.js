import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Platform, Image } from "react-native";
import { Responsive } from "../../assets/theme/Layout";
import { COLORS, FONTS } from "../../assets/theme/Theme";
import { commonStyles } from "../../assets/theme/Styles";
import Icons from "../../constants/Icons";

const CommonInput = ({
    label,
    name,
    val,
    autoCapitalize,
    onchange,
    keyboardType,
    placeholderText,
    disable,
    maxLength,
    addressinputStyle,
    type,
    InputIcon,
    wordCounter,
    Counter,
    inputStyle,
    labelTextStyle,
    optionalInputField,
    editable,
    onBlur,
    onError,
    useref,
    multiline,
    heightInput,
    errors,
}) => {
    const [focused, setFocused] = useState(false);
    const customOnBlur = (e) => {
        setFocused(false);
        onBlur ? onBlur(e) : null;
    };
    const customOnFocus = () => {
        setFocused(true);
    };
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
                                (Optional)
                            </Text>
                        )}
                    </Text>
                ) : null}

                {wordCounter && <Text>{Counter}/100</Text>}
            </View>
            <View style={styles.flexView}>
            <View style={styles.defaultInputIconBox}>
                    <Image source={InputIcon} style={styles.InputIcon} />
                </View>
                <TextInput
                    ref={useref ? useref : null}

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
                            height: heightInput ? heightInput : Responsive.height(50),
                            borderRadius: Responsive.height(14),
                            ...addressinputStyle,
                        },
                    ]}
                    onBlur={(e) => customOnBlur(e)}
                    onFocus={customOnFocus}
                    value={val}
                    onChangeText={(text) => (onchange ? onchange(text) : null)}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={false}
                    autoCompleteType="off"
                    placeholder={placeholderText}
                    maxLength={maxLength}
                    editable={editable}
                    placeholderTextColor={COLORS.lightBlack}
                    returnKeyType={keyboardType == 'numeric' ? "done" : undefined}
                    multiline={multiline}
                />
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
            ) : null}
        </View>
    );
};
const styles = StyleSheet.create({
    inlineStyle: {
        paddingVertical: Responsive.height(8),
        fontSize: Responsive.font(16),
        color: COLORS.blackOpacity80,
        flex: 1,
    },
    labelTextStyle: {
        paddingBottom: Responsive.height(6),
        fontFamily: FONTS.GilroyMedium500,
        fontSize: Responsive.font(14),
        color: COLORS.darkBlack,
    },
    flexView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    commonInputStyle: {
        width: "100%",
        borderRadius: 8,
        paddingHorizontal: Responsive.width(13),
        color: COLORS.placeHolderColor,
        fontFamily: FONTS.PoppinsRegular400,
        fontSize: Responsive.font(14),
    },
    optionalInputField: {
        color: "#84859A",
    },
    labelTextRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    defaultInputIconBox:{
        position: 'absolute',
        zIndex: 1,
        left: Responsive.width(15)
    },
    InputIcon:{
        width: Responsive.width(20),
        height: Responsive.height(20)
    }
});

export default CommonInput;
