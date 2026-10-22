import { ScrollView, Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import imageProduct1 from '../../assets/images/lata.png'
import { Styles } from "./style"

export const OurHighlights = () => {
    return(
        <View style={Styles.container}>

            <Text style={Styles.textOurHighlights}>Nossos <Text style={Styles.textHighlights}>Destaques</Text></Text>

            <View>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
        </View>
    )
}