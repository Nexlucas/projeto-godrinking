import { StyleSheet } from "react-native";
import { colors } from "../../themes/color";

export const styles = StyleSheet.create({
    btnOutline:{
        borderWidth: 2,
        borderColor: colors.colorCyan,
        borderRadius: 7,
        paddingVertical: 10,
        width: 350
    },
    txtBtnOutline:{
        color: colors.colorCyan,
        fontSize: 14,
        textAlign: 'center'
    }
})