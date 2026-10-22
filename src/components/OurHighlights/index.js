import { ScrollView, Text, View } from "react-native"
import { CardProduct } from "../CardProduct"
import imageProduct1 from '../../assets/images/lata.png'
import imageProduct2 from '../../assets/images/lataazul.png'
import imageProduct3 from '../../assets/images/lataverde.png'
import imageProduct4 from '../../assets/images/lataamarela.png'
import { Styles } from "./style"

export const OurHighlights = () => {
    return(
        <View style={Styles.container}>

            <Text style={Styles.textOurHighlights}>Nossos <Text style={Styles.textHighlights}>Destaques</Text></Text>

            <View style={Styles.containerProducts}>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct2} title="TNT Azul" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct3} title="TNT Verde" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct4} title="TNT Amarela" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct2} title="TNT Azul" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct3} title="TNT Verde" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct4} title="TNT Amarela" description="Nosso sabor conta como..."/>
            </View>
        </View>
    )
}