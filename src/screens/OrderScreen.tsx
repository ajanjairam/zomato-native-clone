import { useEffect } from "react";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";
import { OrderScreenNavigationProp } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function OrderScreen() {
    const nav = useNavigation<OrderScreenNavigationProp>();
    useEffect(() => {
        const timer = setTimeout(() => {
            nav.navigate("Deliver");
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView className="bg-zomato-red flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../../assets/order-loading.gif")}
                animation="slideInUp"
                iterationCount={3}
                className="h-96 w-96"
            />
            <Animatable.Text className="text-lg my-10 text-white text-center">
                Waiting for Restaurant to accept your order!
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    );
}

export default OrderScreen;
