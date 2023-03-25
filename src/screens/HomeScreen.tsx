import { Feather, Ionicons } from "@expo/vector-icons";
import { Categories, Featured, Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Platform, TextInput, StatusBar, ScrollView } from "react-native";

function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <Header />
            <View className="flex-row space-x-2 items-center mx-4 pb-2">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center rounded">
                    <Ionicons name="search-outline" size={20} color="gray" />
                    <TextInput placeholder="Restaurents and Cuisines" />
                </View>
                <Feather name="sliders" size={20} color="#E33342" />
            </View>
            <ScrollView
                className="bg-gray-100"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Categories />
                <Featured />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
