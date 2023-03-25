import { STRAPI_HOST } from "@env";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import type {
    FRestaurant,
    RestaurantScreenNavigationProp,
} from "../../../types";

function RestaurantCard({ data }: { data: FRestaurant }) {
    const nav = useNavigation<RestaurantScreenNavigationProp>();
    return (
        <TouchableOpacity
            className="bg-white mr-3 shadow"
            onPress={() => nav.navigate("Restaurant", { restId: data.id })}
        >
            <Image
                className="h-36 w-64 rounded-sm"
                source={{
                    uri: `${STRAPI_HOST}${data.attributes.image.data.attributes.formats.thumbnail.url}`,
                }}
            />
            <View className="pb-4 px-1">
                <Text className="font-bold text-lg pt-2">
                    {data.attributes.name}
                </Text>
                <View className="flex-row items-center space-x-1">
                    <Ionicons name="star" size={22} color="#FCC203" />
                    <View className="flex-row space-x-1">
                        <Text className="text-xs text-gray-500">
                            {data.attributes.rating}
                        </Text>
                        <Text className="text-xs text-gray-500">
                            &bull; Offers
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Ionicons name="location-outline" size={22} color="gray" />
                    <Text className="text-xs text-gray-500">
                        Nearby &bull; {data.attributes.address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RestaurantCard;
