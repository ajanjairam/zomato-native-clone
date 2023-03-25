import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Feature } from "../../../types";
import RestaurantCard from "./RestaurantCard";

function FeaturedRow({ data }: { data: Feature }) {
    return (
        <>
            <View className="px-4 flex-row items-center justify-between">
                <View>
                    <Text className="font-bold text-lg">
                        {data.attributes.name}
                    </Text>
                    <Text className="text-xs text-gray-400">
                        {data.attributes.description}
                    </Text>
                </View>
                <Ionicons
                    name="arrow-forward-outline"
                    color="#E33342"
                    size={24}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4 px-2"
            >
                {data.attributes.restaurants.data.map((rest) => (
                    <RestaurantCard key={rest.id} data={rest} />
                ))}
            </ScrollView>
        </>
    );
}

export default FeaturedRow;
