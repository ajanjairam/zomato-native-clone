import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { STRAPI_API, STRAPI_HOST } from "@env";
import { DishRow, CartOverlay } from "../components";
import { Feather, Ionicons } from "@expo/vector-icons";
import { setRestaurant } from "../redux/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import type {
    IDRestaurant,
    RootStackParamList,
    RestaurantScreenNavigationProp,
} from "../../types";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    Platform,
    StatusBar,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

function RestaurentScreen() {
    const dispatch = useDispatch();
    const nav = useNavigation<RestaurantScreenNavigationProp>();
    const route = useRoute<RouteProp<RootStackParamList, "Restaurant">>();
    const { restId }: { restId: number } = route.params;
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["restaurant", restId],
        queryFn: async (): Promise<IDRestaurant> =>
            await fetch(
                `${STRAPI_API}/restaurants/${restId}?populate[dishes][populate][0]=image&populate=image`
            ).then((res) => res.json()),
    });
    if (isLoading) return <ActivityIndicator size="large" />;
    if (isSuccess) {
        dispatch(setRestaurant(data));

        return (
            <>
                <CartOverlay />
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <ImageBackground
                                className="w-full h-56 bg-gray-400"
                                source={{
                                    uri: `${STRAPI_HOST}${data.data.attributes.image.data.attributes.formats.large.url}`,
                                }}
                            >
                                <TouchableOpacity
                                    className="p-2 bg-gray-100 rounded-full w-10 ml-2 mt-2"
                                    onPress={nav.goBack}
                                >
                                    <Ionicons
                                        name="arrow-back"
                                        size={20}
                                        color="#E33342"
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                            <View className="bg-white">
                                <View className="p-2 pb-0">
                                    <Text className="text-3xl font-bold">
                                        {data.data.attributes.name}
                                    </Text>
                                    <View className="flex-row space-x-1">
                                        <View className="flex-row items-center space-x-1">
                                            <Ionicons
                                                name="star"
                                                size={22}
                                                color="#FCC203"
                                            />
                                            <View className="flex-row space-x-1">
                                                <Text className="text-xs text-yellow-500">
                                                    {
                                                        data.data.attributes
                                                            .rating
                                                    }
                                                </Text>
                                                <Text className="text-xs text-gray-500">
                                                    &bull; Offers
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row items-center space-x-1">
                                            <Ionicons
                                                name="location-outline"
                                                size={22}
                                                color="gray"
                                            />
                                            <Text className="text-xs text-gray-500">
                                                Nearby &bull;{" "}
                                                {data.data.attributes.address}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text className="text-gray-500 mt-2 pb-4">
                                        {data.data.attributes.description}
                                    </Text>
                                </View>
                                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                                    <Ionicons
                                        name="help-circle-outline"
                                        size={20}
                                        color="gray"
                                    />
                                    <Text className="pl-2 flex-1 text-md font-bold">
                                        Have a food allergy ?
                                    </Text>
                                    <Feather
                                        name="chevron-right"
                                        size={20}
                                        color="#E33342"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View className="pb-36">
                                <Text className="p-4 mb-3 font-bold text-xl">
                                    Menu
                                </Text>
                                {data.data.attributes.dishes.data.map(
                                    (dish) => (
                                        <DishRow key={dish.id} data={dish} />
                                    )
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    } else return <></>;
}

export default RestaurentScreen;
