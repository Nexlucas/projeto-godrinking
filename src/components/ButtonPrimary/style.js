import { StyleSheet } from "react-native";
import { colors } from "../../themes/color";

export const styles = StyleSheet.create({
    btnPrimary:{
        backgroundColor: colors.colorHorDrink,
        padding: 10,
        width: 350,
        borderRadius: 7
    },
    txtBtnPrimary:{
        textAlign: "center",
        fontSize: 18,
        color: colors.colorWhite
    }

})