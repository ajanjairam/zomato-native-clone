import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// https://transform.tools/json-to-typescript

type Categories = {
  data: Category[];
  meta: Meta;
};

type Features = {
  data: Feature[];
  meta: Meta;
};

type IDRestaurant = {
  data: Restaurant;
  meta: Meta;
};

type Category = {
  id: number;
  attributes: CategoryAttributes;
};

type Feature = {
  id: number;
  attributes: FeaturedAttributes;
};

type Restaurant = {
  id: number;
  attributes: FRestaurantAttributes & { dishes: { data: RestaurantDish[] } };
};

type CategoryAttributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
};

type FeaturedAttributes = {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  restaurants: {
    data: Restaurant[];
  };
};

type Image = {
  data: ImageData;
};

type ImageData = {
  id: number;
  attributes: ImageAttributes;
};

type ImageAttributes = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
};

type ImageFormats = {
  thumbnail: ImageType;
  small: ImageType;
  medium: ImageType;
  large: ImageType;
};

type ImageType = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type FRestaurant = {
  id: number;
  attributes: FRestaurantAttributes;
};

type FRestaurantAttributes = {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
};

type RestaurantDish = {
  id: number;
  attributes: RDishAttributes;
};

type RDishAttributes = {
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
};

type GroupedItems = {
  [key: number]: RestaurantDish[];
};

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Order: undefined;
  Deliver: undefined;
  Restaurant: { restId: number };
};

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cart"
>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
type OrderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Order"
>;
type DeliverScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Deliver"
>;
type RestaurantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Restaurant"
>;

export {
  Feature,
  Features,
  Categories,
  FRestaurant,
  IDRestaurant,
  GroupedItems,
  RestaurantDish,
  RootStackParamList,
  HomeScreenNavigationProp,
  CartScreenNavigationProp,
  OrderScreenNavigationProp,
  DeliverScreenNavigationProp,
  RestaurantScreenNavigationProp,
};
