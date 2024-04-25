import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Classes, Assessments } from "../screens/Index";
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icons from "../constants/Icons";
import { Responsive } from "../assets/theme/Layout";
import { useNavigation } from "@react-navigation/native";
// import Classes from "../screens/user/classes/Classes";
// import Assessments from "../screens/user/assessments/Assessments";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation=useNavigation()
  function handlePressTab(route) {
    
    // const options = {
    //   enableVibrateFallback: true,
    //   ignoreAndroidSystemSettings: false,
    // };
    // RNReactNativeHapticFeedback.trigger("impactHeavy", options);
    navigation.navigate(route)
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return (
                <TouchableWithoutFeedback onPress={() => handlePressTab('Home')}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: Responsive.height(100),
                    }}
                  >
                    {focused ? (
                      <Image
                        source={Icons.homeActiveNavigate}
                        style={styles.tabStyle}
                      />
                    ) : (
                      <Image
                        source={Icons.homeNavigate}
                        style={styles.tabStyle}
                      />
                    )}
                  </View>
                </TouchableWithoutFeedback>

              );
              break;
            case "Classes":
              return (
                <TouchableWithoutFeedback onPress={() => handlePressTab('Classes')}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {focused ? (
                      <Image
                        source={Icons.classesActive}
                        style={styles.tabStyle}
                      />
                    ) : (
                      <Image
                        source={Icons.classesTab}
                        style={styles.tabStyle}
                      />
                    )}
                  </View>
                </TouchableWithoutFeedback>
              );
              break;
            case "Assessments":
              return (
                <TouchableWithoutFeedback onPress={() => handlePressTab('Assessments')}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {focused ? (
                      <Image
                        source={Icons.assessmentsActive}
                        style={styles.tabStyle}
                      />
                    ) : (
                      <Image
                        source={Icons.assessmentsTab}
                        style={styles.tabStyle}
                      />
                    )}
                  </View>
                </TouchableWithoutFeedback>
              );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.select({
            ios: Responsive.height(90),
            android: Responsive.height(73),
          }),
          paddingTop: Platform.select({
            ios: Responsive.height(6),
            // android: Responsive.height(73),
          }),
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Classes" component={Classes} />
      <Tab.Screen name="Assessments" component={Assessments} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabStyle: {
    resizeMode: "contain",
    width: Responsive.width(67),
    height: Responsive.height(43),
  },
});
