import { STRAPI_API } from "@env";
import { useQuery } from "react-query";
import type { Categories } from "../../../types";
import { ActivityIndicator, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

function Categories() {
    const { isLoading, isSuccess, data } = useQuery({
        queryKey: "categories",

        queryFn: async (): Promise<Categories> =>
            await fetch(`${STRAPI_API}/categories?populate=*`).then((res) =>
                res.json()
            ),
    });
    if (isLoading) return <ActivityIndicator size="large" />;
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="m-2 space-y-2"
        >
            {isSuccess &&
                data.data.map((cat) => {
                    return (
                        <CategoryCard
                            key={cat.id}
                            name={cat.attributes.name}
                            imageUrl={
                                cat.attributes.image.data.attributes.formats
                                    .thumbnail.url
                            }
                        />
                    );
                })}
        </ScrollView>
    );
}

export default Categories;
