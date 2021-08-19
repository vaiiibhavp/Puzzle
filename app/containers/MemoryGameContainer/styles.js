import { StyleSheet } from "react-native";
import { DEVICE } from "../../utils/Constants";
import { colors } from "../../styles";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.SCREEN_BG,
    },
    matchesContainer: {
        paddingHorizontal: moderateScale(16),
        flexDirection: 'row',
        marginVertical: moderateScale(10)
    },
    matchesTextLbl: {
        fontSize: moderateScale(20),
        color: colors.FONT_BLACK,
        flex: 1,
    },
    matchesText: {
        color: colors.FONT_BLUE,
        fontWeight: 'bold'
    },
    flatListContainer: {
        flex: 0.8
    },
    contentContainerStyle: {
        paddingStart: moderateScale(16)
    },
    cardContainer: {
        flex: 1,
        height: moderateScale(70),
        marginEnd: moderateScale(16),
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    alphabetText: {
        color: colors.FONT_BLACK,
        fontWeight: 'bold',
        fontSize: moderateScale(35),
    }
})