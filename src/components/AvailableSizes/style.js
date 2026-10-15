import { StyleSheet } from "react-native"
import { colors } from "../../themes/color"
import { fonts } from "../../themes/fonts"


export const styles = StyleSheet.create({
    containerAvailableSizes:{
        gap: 10
    },
    textTitle:{
        color: colors.colorWhite,
        fontSize: 25,
        fontFamily: fonts.fontTitle,
        fontWeight: "700"
    },
    textHighlight:{
        color: colors.colorHorDrink
    },
    scrollContent:{
        gap: 15
    }
})