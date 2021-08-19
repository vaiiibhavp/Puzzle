import { Dimensions, Platform, StatusBar } from "react-native";

var { height, width } = Dimensions.get("window");

export const DEVICE = {
    DEVICE_HEIGHT: height,
    DEVICE_WIDTH: width,
    ANDROID_DEVICE_HEIGHT: Platform.OS === 'android' && Platform.Version > 26
        ? Dimensions.get('screen').height - StatusBar.currentHeight :
        Dimensions.get('window').height
}

export const DEVICE_OS = Platform.OS;
