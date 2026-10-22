import { Image, ScrollView, TextInput, View } from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import { style } from "./style"

export const ProductsScreen = () => {
    return(
        <ScrollView contentContainerStyle={style.containerProductsScreen}>
            <Image source={logo}/>

            <View>
                <TextInput/>
                <Image source={filterIcon}/>
            </View>
        </ScrollView>
    )
}