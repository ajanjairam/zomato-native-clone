import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    HomeScreen,
    CartScreen,
    OrderScreen,
    DeliverScreen,
    RestaurentScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurentScreen} />
            </Stack.Group>
            <Stack.Group
                screenOptions={{ presentation: "modal", headerShown: false }}
            >
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                    presentation: "fullScreenModal",
                }}
            >
                <Stack.Screen name="Deliver" component={DeliverScreen} />
                <Stack.Screen name="Order" component={OrderScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MainStack;
