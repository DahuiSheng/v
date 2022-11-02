import React from "react";
import { View, Text, ScrollView, Image, Center, VStack, Box, AspectRatio, Stack, Heading, HStack } from "native-base";

const UserScreen = () => {
    return (
        <View>
            {/* 背景画像の色を設定 */}
            <ScrollView
                w="100%" h="100%"
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
            >
                <Center
                    pt={8}
                    px={4}
                    flex={1}
                >
                    <VStack space={5} alignItems="center">

                        {/* Image */}
                        <Box maxW="90%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                            <Box>
                                {/* 画像の表示 */}
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    }} alt="image" />
                                </AspectRatio>

                                {/* 文字の表示 */}
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            ROBOT PAYMENT
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="-1">
                                            The Silicon Valley of India.
                                        </Text>
                                    </Stack>
                                    <Text fontWeight="400">
                                        Bengaluru (also called Bangalore) is the center of India's high-tech
                                        industry. The city is also known for its parks and nightlife.
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                            }} fontWeight="400"
                                        >
                                            6 mins ago
                                        </Text>
                                        </HStack>
                                    </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                        </VStack>
                    </Center>
                </ScrollView>
            </View>
    );
};

export default UserScreen;