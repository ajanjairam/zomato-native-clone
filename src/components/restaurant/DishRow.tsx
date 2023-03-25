import { useState } from "react";
import { STRAPI_HOST } from "@env";
import { RestaurantDish } from "../../../types";
import { AntDesign } from "@expo/vector-icons";
import {
    addToCart,
    removeFromCart,
    selectCartWithID,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { View, Text, TouchableOpacity, Image } from "react-native";

function DishRow({ data }: { data: RestaurantDish }) {
    const dispatch = useAppDispatch();
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const cartItems = useAppSelector((state) =>
        selectCartWithID(state, data.id)
    );
    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed((state) => !state)}
                className={`bg-white border p-4 border-gray-200 ${
                    isPressed && "border-b-0"
                }`}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">
                            {data.attributes.name}
                        </Text>
                        <Text className="text-gray-400">
                            {data.attributes.description}
                        </Text>
                        <Text className="text-gray-400 mt-2">
                            ₹ {data.attributes.price}
                        </Text>
                    </View>
                    <View>
                        <Image
                            className="h-20 w-20 p-4"
                            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
                            source={{
                                uri: `${STRAPI_HOST}${data.attributes.image.data.attributes.formats.thumbnail.url}`,
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className="px-4 bg-white">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity
                            onPress={() =>
                                cartItems.length > 0 &&
                                dispatch(removeFromCart(data.id))
                            }
                        >
                            <AntDesign
                                name="minuscircle"
                                size={30}
                                color={
                                    cartItems.length > 0 ? "#E33342" : "gray"
                                }
                            />
                        </TouchableOpacity>
                        <Text>{cartItems.length}</Text>
                        <TouchableOpacity
                            onPress={() => dispatch(addToCart(data))}
                        >
                            <AntDesign
                                name="pluscircle"
                                size={30}
                                color="#E33342"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
}

export default DishRow;
