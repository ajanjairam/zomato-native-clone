import { STRAPI_API } from "@env";
import { useQuery } from "react-query";
import type { Features } from "../../../types";
import { View, Text, ActivityIndicator } from "react-native";
import FeaturedRow from "./FeaturedRow";

function Featured() {
    const { isSuccess, isLoading, data } = useQuery({
        queryKey: "featured",
        queryFn: async (): Promise<Features> =>
            await fetch(
                `${STRAPI_API}/featureds?populate[restaurants][populate][0]=image`
            ).then((res) => res.json()),
    });
    if (isLoading) return <ActivityIndicator size="large" />;
    return (
        <View className="pb-2">
            {isSuccess &&
                data.data.map((feature) => (
                    <FeaturedRow key={feature.id} data={feature} />
                ))}
        </View>
    );
}
export default Featured;
