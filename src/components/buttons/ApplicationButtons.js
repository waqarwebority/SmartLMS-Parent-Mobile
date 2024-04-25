import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { COLORS, FONTS } from '../../assets/theme/Theme';

export default function Button55W({
    onPress,
    buttonStyle,
    textStyle,
    disabled,
    content }) {
    function pressed() {
      onPress()
      const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      };
      // RNReactNativeHapticFeedback.trigger("impactHeavy", options);
    }
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        style={[
          { ...styles.largeButton, ...buttonStyle },
          disabled && styles.disabledButton,
        ]}
      >
        <Text style={[{ ...styles.largeButtonText, ...textStyle }]}>
          {content}
        </Text>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    largeButton: {
      height: Responsive.height(55),
      width: "100%",
      backgroundColor: COLORS.darkPurple,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    largeButtonText: {
      fontSize: Responsive.font(18),
      fontWeight: "600",
      color: COLORS.white,
      paddingBottom: Platform.select({
        ios: Responsive.height(0),
        android: Responsive.height(2),
      }),
      fontFamily: FONTS.GilroyBold700,
      letterSpacing:1
    },
  });