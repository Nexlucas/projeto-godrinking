import { StyleSheet } from "react-native"
import { colors } from "../../themes/color"
import { fonts } from "../../themes/fonts"


export const styles = StyleSheet.create({
    CardSize:{
        borderWidth: 2,
        borderColor: colors.colorVibrantPink,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: 75,
        height: 80,
        alignItems: "center",
        gap: 5
    },
    productImage:{
        width: 18,
        height: 40
    },
    textAmount:{
        color: colors.colorWhite,
        fontWeight: "700"
    },
    textMeasure:{
        color: colors.colorHorDrink
    },
    scrollContent:{
        gap: 15
    },
})