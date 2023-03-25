import { STRAPI_HOST } from "@env";
import { IDRestaurant } from "../../types";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../redux/store";
import type { GroupedItems, CartScreenNavigationProp } from "../../types";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {
    removeFromCart,
    selectCart,
    selectCartTotal,
} from "../redux/cartSlice";

function CartScreen() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCart);
    const cartTotal = useAppSelector(selectCartTotal);
    const nav = useNavigation<CartScreenNavigationProp>();
    const restaurant = useAppSelector(selectRestaurant) as IDRestaurant;
    const [groupedCartItems, setGroupedCartItems] = useState<GroupedItems>({});

    useEffect(() => {
        const results = cartItems.reduce((res: GroupedItems, item) => {
            (res[item.id] = res[item.id] || []).push(item);
            return res;
        }, {});
        setGroupedCartItems(results);
    }, [cartItems]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#E33342] bg-white shadow-sm">
                    <View>
                        <Text className="text-center text-lg">Cart</Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.data.attributes.name}
                        </Text>
                    </View>
                    <TouchableOpacity
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                        onPress={nav.goBack}
                    >
                        <Ionicons
                            name="close-circle"
                            size={30}
                            color="#E33342"
                        />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-2 p-2 bg-white mb-5">
                    <Image
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
                        }}
                        className="h-7 w-7 rounded bg-gray-300"
                    />
                    <Text className="flex-1">Delivery in 30 - 35 minutes</Text>
                    <TouchableOpacity>
                        <Text className="text-zomato-red">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {Object.entries(groupedCartItems).map(([key, items]) => (
                        <View
                            key={key}
                            className="flex-row items-center space-x-3 bg-white p-2"
                        >
                            <Text className="text-zomato-red">
                                {items.length}x
                            </Text>
                            <Image
                                className="h-12 w-12 rounded-full"
                                source={{
                                    uri: `${STRAPI_HOST}${items[0].attributes.image.data.attributes.formats.thumbnail.url}`,
                                }}
                            />
                            <Text className="flex-1">
                                {items[0].attributes.name}
                            </Text>
                            <Text>₹{items[0].attributes.price}</Text>
                            <TouchableOpacity
                                onPress={() => dispatch(removeFromCart(+key))}
                            >
                                <Text className="text-zomato-red">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className="px-5 py-3 bg-white mt-5 space-y-2">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">₹{cartTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">₹49</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="font-semibold">Order Total</Text>
                        <Text className="font-semibold">₹{cartTotal + 49}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => nav.navigate("Order")}
                        className="p-4 bg-zomato-red rounded-lg"
                    >
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default CartScreen;
