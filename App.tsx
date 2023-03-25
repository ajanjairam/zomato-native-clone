import Store from "./src/redux/store";
import { Provider } from "react-redux";
import { MainStack } from "./src/stacks";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={Store}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
