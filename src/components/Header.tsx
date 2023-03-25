import { View, Text, Image } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

function Header() {
    return (
        <View className="flex-row pb-3 items-center mx-3 space-x-2">
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
                }}
                className="h-10 w-10 rounded"
            />
            <View className="flex-1">
                <Text className="font-bold text-xs text-gray-400">
                    Deliver Now!
                </Text>
                <View className="flex-row items-center">
                    <Text className="font-bold text-lg">Current Location</Text>
                    <Feather name="chevron-down" color="#E33342" size={24} />
                </View>
            </View>
            <Ionicons name="person-outline" size={35} color="#E33342" />
        </View>
    );
}

export default Header;
