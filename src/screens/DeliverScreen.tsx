import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useAppSelector } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DeliverScreenNavigationProp, IDRestaurant } from "../../types";
import MapView, { Marker } from "react-native-maps";

function DeliverScreen() {
    const nav = useNavigation<DeliverScreenNavigationProp>();
    const restaurant = useAppSelector(selectRestaurant) as IDRestaurant;
    return (
        <SafeAreaView className="bg-zomato-red flex-1">
            <View className="p-5 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => nav.navigate("Home")}>
                    <Ionicons name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">
                    Order Help
                </Text>
            </View>
            <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-md">
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-gray-400">Estimated Arrival</Text>
                        <Text className="text-2xl font-bold">
                            30 - 35 minutes
                        </Text>
                    </View>
                    <Image
                        className="h-14 w-14"
                        source={{
                            uri: "https://raw.githubusercontent.com/antonfrancisjeejo/zomato-clone-rn-sanity/main/client/assets/delivery.png",
                        }}
                    />
                </View>
                <Progress.Bar
                    color="#E33342"
                    indeterminate={true}
                    className="mt-2"
                />
                <Text className="text-gray-500 mt-3 text-xs">
                    Your order at {restaurant.data.attributes.name} is being
                    prepared.
                </Text>
            </View>
            <MapView
                mapType="mutedStandard"
                className="flex-1 -mt-10 -z-10"
                initialRegion={{
                    latitude: restaurant.data.attributes.latitude,
                    longitude: restaurant.data.attributes.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    pinColor="#E33342"
                    identifier="origin"
                    title={restaurant.data.attributes.name}
                    description={restaurant.data.attributes.description}
                    coordinate={{
                        latitude: restaurant.data.attributes.latitude,
                        longitude: restaurant.data.attributes.longitude,
                    }}
                />
            </MapView>
            <View className="bg-white flex-row items-center h-26 space-x-5">
                <Image
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                    source={{
                        uri: "https://raw.githubusercontent.com/antonfrancisjeejo/zomato-clone-rn-sanity/main/client/assets/delivery.png",
                    }}
                />
                <View className="flex-1">
                    <Text className="text-lg">Rider Name</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-zomato-red text-lg mr-5">Call</Text>
            </View>
        </SafeAreaView>
    );
}

export default DeliverScreen;
