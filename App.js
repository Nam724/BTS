import Main_page from "./src/screen/main";
import SignUp_page from "./src/screen/signup";
import SignIn_page from "./src/screen/signin";
import Restaurant_page from "./src/screen/restaurant";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { colorPack } from "./src/style/style";
import Setting_page from "./src/screen/setting";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from "expo-ads-admob";

Amplify.configure(awsconfig);

const Stack = createStackNavigator();

export default function App() {
    let [fontLoaded] = useFonts({
        happy_sans_bold: require("./assets/font/Happiness-Sans-Bold.ttf"),
        happy_sans_regular: require("./assets/font/Happiness-Sans-Regular.ttf"),
        happy_sans_title: require("./assets/font/Happiness-Sans-Title.ttf"),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"SignIn"}>
                <Stack.Screen
                    name="SignIn"
                    component={SignIn_page}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerTintColor:
                            colorPack.text_light,
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp_page}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerTintColor:
                            colorPack.text_light,
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main_page}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerTintColor:
                            colorPack.text_light,
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Setting"
                    component={Setting_page}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerTintColor:
                            colorPack.text_light,
                        headerBackTitleVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Restaurant"
                    component={Restaurant_page}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerTintColor:
                            colorPack.text_light,
                        headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const adBannerUnitId =
    Platform.OS === "android"
        ? "ca-app-pub-1145139773627965/8701930912"
        : "ios 광고 id"; // 광고 ID 입력

export function RestaurantBannerAds() {
    return (
        <AdMobBanner
            bannerSize="banner"
            adUnitID={adBannerUnitId} // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={(err) => {
                console.log(err);
            }}
        />
    );
}
