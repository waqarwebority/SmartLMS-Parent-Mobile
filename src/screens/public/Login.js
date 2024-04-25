import React, { useState } from 'react'
import { Animated, Image, ImageBackground, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Images from '../../constants/Images'
import { Formik } from 'formik'
import * as yup from "yup";
import { Responsive } from '../../assets/theme/Layout';
import CommonInput from '../../components/inputs/CommonInput';
import ApplicationPasswordInput from '../../components/inputs/ApplicationPasswordInput';
import Button55W from '../../components/buttons/ApplicationButtons';
import { COLORS, FONTS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import { commonStyles } from '../../assets/theme/Styles';
import { useNavigation } from '@react-navigation/native';

const navigation=useNavigation()
const Login = () => {
    const [showError, setShowError] = useState();

    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const LoginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Email is required")
            .matches(emailregex, "Enter a valid Email Address"),
        password: yup.string().required("Password is required"),
    });
    const handlePressOutside = () => {
        Keyboard.dismiss();
    };
    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View style={styles.container}>
                <Animated.ScrollView
                    keyboardShouldPersistTaps="handled"
                    automaticallyAdjustKeyboardInsets={true}
                    contentContainerStyle={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{flex:1}}>
                        <ImageBackground source={Images.loginImg} style={styles.loginBG}>

                        </ImageBackground>
                    </View>
                    <View style={{justifyContent:'flex-end',}}> 
                        <View style={styles.loginHBox}>
                            <Text style={styles.loginH}>
                                Parent Account
                            </Text>
                        </View>
                        <View style={styles.loginSubHBox}>
                            <Text style={styles.loginSubH}>
                            Please enter your login credentials!
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', marginTop:Responsive.height(32)}}>
    
                            <Formik
                                validationSchema={LoginValidationSchema}
                                initialValues={{
                                    email: "",
                                    password: "",
                                }}
                                onSubmit={(value) => {
                                    startLogin(value);
                                }}
                               
                            >
                                {({
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    errors,
                                    touched,
                                    values,
                                }) => (
                                    <View style={styles.loginBGContainer}>
                                        <CommonInput
                                            label="Email Address"
                                            placeholderText="Email,  eg. john@gmail.com"
                                            val={values.email}
                                            onchange={handleChange("email")}
                                            InputIcon={Icons.mail}
                                            onBlur={handleBlur("email")}
                                            keyboardType={"email-address"}
                                            onError={errors.email && touched.email ? errors.email : null}
                                            errors={errors.email && touched.email}
                                        />
                                        <View style={{ marginTop: Responsive.height(25) }}>
                                            <ApplicationPasswordInput
                                                label="Password"
                                                placeholderText="Enter your password"
                                                val={values.password}
                                                onchange={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                onError={
                                                    errors.password && touched.password
                                                        ? errors.password
                                                        : null
                                                }
                                                errors={errors.password && touched.password}
                                            />
                                        </View>
                                        <View style={{ alignItems: "flex-end", marginTop: Responsive.height(10) }}>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("ForgotPassword")}
                                                activeOpacity={0.6}
                                            >
                                                <Text style={styles.resendCode}>Forgot Password?</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {showError ? (
                                            <View
                                                style={[
                                                    commonStyles.appShadow,
                                                    commonStyles.BackendErrorMessageBox,
                                                    { marginTop: Responsive.height(20) },
                                                ]}
                                            >
                                                <View>
                                                    <Text
                                                        style={[
                                                            commonStyles.fourteenWhite600,
                                                            { color: "#DC3546" },
                                                        ]}
                                                    >
                                                        {showError}
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    activeOpacity={0.6}
                                                    onPress={() => {
                                                        setShowError("");
                                                    }}
                                                    style={{ width: 30, height: "24px" }}
                                                >
                                                    <Image
                                                        source={Icons.darkCross}
                                                        style={commonStyles.BackendcrossErrorImage}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        ) : null}
    
                                        <View style={{ paddingBottom: Responsive.height(30), marginTop:Responsive.height(40) }}>
                                            <Button55W 
                                            onPress={()=>navigation.navigate('BottomTabNavigator')}
                                            // onPress={handleSubmit}
                                             content="Login" />
                                        </View>
                                    </View>
                                )}
                            </Formik>
    
                        </View>
                    </View>
                </Animated.ScrollView>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    loginBG: {
        width: "100%",
        height: "100%",
        resizeMode: "row",
        zIndex: 0
    },
    logo: {
        width: 230,
        height: 40,
        resizeMode: "contain",
        alignSelf: "center",
    },
    logoContainer: {
        width: "100%",
        paddingTop: Responsive.height(20),
        paddingBottom: Responsive.height(30),
    },
    loginBGContent: {
        paddingHorizontal: Responsive.width(20),
        alignItems: "center",
    },
    loginBGContainer: {
        paddingHorizontal: Responsive.width(20),
    },
    headingFont: {
        fontFamily: FONTS.GilroyBold700,
        color: COLORS.white,
        fontSize: Responsive.font(28),
    },
    subHeading: {
        fontFamily: FONTS.GilroyMedium500,
        color: COLORS.white,
        fontSize: Responsive.font(16),
        paddingTop: Responsive.height(16),
    },
    resendCode: {
        color: COLORS.primary,
        fontFamily: FONTS.GilroySemiBold600,
        fontSize: 14,
    },
    goBackButton: {
        height: Responsive.height(35),
        width: Responsive.width(35),
        position: "absolute",
        left: 10,
        top: 25,
        resizeMode: "contain",
        zIndex: 0
    },
    titleText: {
        fontFamily: FONTS.GilroyBold700,
        fontSize: Responsive.font(32),
        color: COLORS.white,
        textAlign: "center",
    },
    loginHBox: {
        // marginTop: Responsive.height(10),
       alignItems:'center',
    },
    loginH: {
        fontFamily: FONTS.GilroyBold700,
        fontSize: Responsive.width(24),
        color: COLORS.darkBlack,
    },
    loginSubHBox:{
        marginTop:Responsive.height(10),
        alignItems:'center'
    },
    loginSubH:{
        fontFamily: FONTS.GilroyMedium500,
        fontSize: Responsive.width(12),
        color: COLORS.lightBlack,
    }
});