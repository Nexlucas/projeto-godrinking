import { Image, Pressable, View, Text } from "react-native"
import { styles } from "./style"

export const CardProduct = ({image, title, description}) => {
    return(
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imgProduct}/> 
            <Text style={styles.titleProduct}>{title}</Text>
            <Text style={styles.descriptionProduct}>{description}</Text>

            <Pressable style={styles.bntLearnMore}>
                <Text style={styles.txtBtn}>Saiba mais</Text>
            </Pressable>
        </View>
    )
}