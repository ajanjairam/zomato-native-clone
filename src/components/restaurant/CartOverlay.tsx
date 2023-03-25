import { useAppSelector } from "../../redux/store";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import type { RestaurantScreenNavigationProp } from "../../../types";
import { selectCart, selectCartTotal } from "../../redux/cartSlice";

function CartOverlay() {
    const cartItems = useAppSelector(selectCart);
    const cartTotal = useAppSelector(selectCartTotal);
    const nav = useNavigation<RestaurantScreenNavigationProp>();

    if (cartItems.length <= 0) return <></>;

    return (
        <View className="absolute bottom-10 w-full z-10">
            <TouchableOpacity
                onPress={() => nav.navigate("Cart")}
                className="bg-[#E33342] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
            >
                <Text className="text-white font-extrabold text-lg bg-[#B90211] px-2 py-1 rounded">
                    {cartItems.length}
                </Text>
                <Text className="text-white font-extrabold text-lg flex-1 text-center">
                    View Cart
                </Text>
                <Text className="text-white font-extrabold text-lg">
                    ₹{cartTotal}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default CartOverlay;
