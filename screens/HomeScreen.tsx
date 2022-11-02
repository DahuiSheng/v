import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    extendTheme,
    VStack,
    Box,
    View,
    Button,
    ScrollView,
    Image,
    AspectRatio,
    Stack
} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";
import { Dimensions } from "react-native";


// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};
  
// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const { width } = Dimensions.get("window");

const HomeScreen = () => {
    return (
            <View>
                {/* 縦スクロール：背景画像の色を設定 */}
                <ScrollView
                    width="100%" h="100%"
                    _dark={{ bg: "blueGray.900" }}
                    _light={{ bg: "blueGray.50" }}
                >
                    {/* １つめ */}
                    <Heading m={4}>Doremi</Heading>
                    {/* 横スクロール： */}
                    <ScrollView
                        horizontal={true}
                        height = "33%"
                        width="100%"
                        // bgColor="emerald.400"
                    >
                        
                        <HStack space={5} mx={5}>
                                {/* 一つ目のグループ */}
                                <Box w={width * 0.8} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        {/* 画像の表示 */}
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{
                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                            }} alt="image" />
                                        </AspectRatio>

                                        {/* 文字の表示 */}
                                        <Stack p="4" space={3}>

                                            {/* 会社名の表示 */}
                                            <Stack space={2}>
                                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                                    {/* 会社名 */}
                                                    <Heading size="md" ml="-1">
                                                        ROBOT PAYMENT
                                                    </Heading>
                                                    
                                                    {/* 所在地 */}
                                                    <Text fontSize="xs" _light={{
                                                        color: "violet.500"
                                                        }} _dark={{
                                                            color: "violet.400"
                                                        }} fontWeight="500" ml="-0.5" mt="-1"
                                                    >
                                                        東京 / 愛知
                                                    </Text>

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </Stack>

                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                {/* 文字の表示 */}
                                                <Text fontWeight="600">
                                                    LT会!! システムアーキテクチャに迫る!
                                                </Text>

                                                {/* 日付 */}
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                    }} fontWeight="400"
                                                >
                                                    2022 / 11 / 1
                                                </Text>
                                            </HStack>

                                            {/* 日付 */}
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box>

                                {/* 二つめのグループ */}
                                <Box w={width * 0.8} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        {/* 画像の表示 */}
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{
                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                            }} alt="image" />
                                        </AspectRatio>

                                        {/* 文字の表示 */}
                                        <Stack p="4" space={3}>

                                            {/* 会社名の表示 */}
                                            <Stack space={2}>
                                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                                    {/* 会社名 */}
                                                    <Heading size="md" ml="-1">
                                                        ROBOT PAYMENT
                                                    </Heading>
                                                    
                                                    {/* 所在地 */}
                                                    <Text fontSize="xs" _light={{
                                                        color: "violet.500"
                                                        }} _dark={{
                                                            color: "violet.400"
                                                        }} fontWeight="500" ml="-0.5" mt="-1"
                                                    >
                                                        東京 / 愛知
                                                    </Text>

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </Stack>

                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                {/* 文字の表示 */}
                                                <Text fontWeight="600">
                                                    LT会!! システムアーキテクチャに迫る!
                                                </Text>

                                                {/* 日付 */}
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                    }} fontWeight="400"
                                                >
                                                    2022 / 11 / 1
                                                </Text>
                                            </HStack>

                                            {/* 日付 */}
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box>
                        </HStack>
                    </ScrollView>

                    {/* ２つめ */}
                    <Heading m={4}>Doremi</Heading>
                    <ScrollView
                        horizontal={true}
                        height = "33%"
                        width="100%"
                        // bgColor="emerald.400"
                    >
                        <HStack space={5} mx={5}>
                                {/* 一つ目のグループ */}
                                <Box w={width * 0.8} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        {/* 画像の表示 */}
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{
                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                            }} alt="image" />
                                        </AspectRatio>

                                        {/* 文字の表示 */}
                                        <Stack p="4" space={3}>

                                            {/* 会社名の表示 */}
                                            <Stack space={2}>
                                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                                    {/* 会社名 */}
                                                    <Heading size="md" ml="-1">
                                                        ROBOT PAYMENT
                                                    </Heading>
                                                    
                                                    {/* 所在地 */}
                                                    <Text fontSize="xs" _light={{
                                                        color: "violet.500"
                                                        }} _dark={{
                                                            color: "violet.400"
                                                        }} fontWeight="500" ml="-0.5" mt="-1"
                                                    >
                                                        東京 / 愛知
                                                    </Text>

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </Stack>

                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                {/* 文字の表示 */}
                                                <Text fontWeight="600">
                                                    LT会!! システムアーキテクチャに迫る!
                                                </Text>

                                                {/* 日付 */}
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                    }} fontWeight="400"
                                                >
                                                    2022 / 11 / 1
                                                </Text>
                                            </HStack>

                                            {/* 日付 */}
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box>

                                {/* 二つめのグループ */}
                                <Box w={width * 0.8} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                                    <Box>
                                        {/* 画像の表示 */}
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{
                                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                            }} alt="image" />
                                        </AspectRatio>

                                        {/* 文字の表示 */}
                                        <Stack p="4" space={3}>

                                            {/* 会社名の表示 */}
                                            <Stack space={2}>
                                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                                    {/* 会社名 */}
                                                    <Heading size="md" ml="-1">
                                                        ROBOT PAYMENT
                                                    </Heading>
                                                    
                                                    {/* 所在地 */}
                                                    <Text fontSize="xs" _light={{
                                                        color: "violet.500"
                                                        }} _dark={{
                                                            color: "violet.400"
                                                        }} fontWeight="500" ml="-0.5" mt="-1"
                                                    >
                                                        東京 / 愛知
                                                    </Text>

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </Stack>

                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                {/* 文字の表示 */}
                                                <Text fontWeight="600">
                                                    LT会!! システムアーキテクチャに迫る!
                                                </Text>

                                                {/* 日付 */}
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                    }} fontWeight="400"
                                                >
                                                    2022 / 11 / 1
                                                </Text>
                                            </HStack>

                                            {/* 日付 */}
                                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                                <HStack alignItems="center">

                                                    {/* 日付 */}
                                                    {/* <Text color="coolGray.600" _dark={{
                                                        color: "warmGray.200"
                                                        }} fontWeight="400"
                                                    >
                                                        2022 / 11 / 1
                                                    </Text> */}
                                                </HStack>
                                            </HStack>
                                        </Stack>
                                    </Box>
                                </Box>
                        </HStack>
                    </ScrollView>
                </ScrollView>
            </View>
    );
};

export default HomeScreen;