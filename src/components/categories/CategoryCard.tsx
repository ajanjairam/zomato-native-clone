import { STRAPI_HOST } from "@env";
import { Text, Image, TouchableOpacity } from "react-native";

function CategoryCard({ name, imageUrl }: { name: string; imageUrl: string }) {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{ uri: `${STRAPI_HOST}${imageUrl}` }}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 left-1 font-bold text-white">
                {name}
            </Text>
        </TouchableOpacity>
    );
}

export default CategoryCard;
