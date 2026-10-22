import { Image } from "react-native"
import { View } from "react-native"
import { OurOffers } from "../../components/OurOffers"
import logo from '../../assets/images/logo.png'
import { styles } from "./style"
import { AvailableSizes } from "../../components/AvailableSizes"
import { OurHighlights } from "../../components/OurHighlights"

export const HomeScreen = () => {
    return(
        <View style={styles.containerHomeScreen}>

            <Image source={logo} style={styles.logoHome}/>
            <OurOffers/>
            <AvailableSizes/>
            <OurHighlights/>
        </View>
    )
}