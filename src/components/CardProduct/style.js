import { StyleSheet } from "react-native";
import { colors } from "../../themes/color";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    cardContainer:{
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: colors.colorVibrantPink,
        borderRadius: 13,
        backgroundColor: "#270053"
    },
    imgProduct:{
        width: 50,
        height: 110
    },
    titleProduct:{
        fontSize: 24,
        fontWeight: "400",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite
    },
    descriptionProduct:{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: fonts.fontBody,
        color: colors.colorGray
    },
    bntLearnMore:{
        backgroundColor: colors.colorHorDrink,
        width: 155,
        paddingVertical: 5,
        borderRadius: 5
    },
    txtBtn:{
        fontSize: 15,
        color: colors.colorWhite,
        fontFamily: fonts.fontBody,
        textAlign: "center"
    }
})