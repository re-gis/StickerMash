import { Image } from "expo-image"
import { StyleSheet } from "react-native";

type Props = {
    imageSrc: string;
    selectedImage?: string;
}

export default function ImageViewer({ imageSrc, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imageSrc
    return <>
        <Image source={imageSource} style={styles.image} />
    </>
}


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})