import React from "react";
import { View, Text, Box, Center, Checkbox, Heading, HStack, Icon, IconButton, Input, useToast, VStack, useTheme, ScrollView, Container, Card } from "native-base"
import { Feather, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const BookScreen = () => {
    const {
        colors
      } = useTheme();
      const { width } = Dimensions.get("window");
      const items = [];

      for (let i = 0; i < 5; i++) {
        items.push(
            <Center key={i} bg="primary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">
                Item
            </Center>
        )
      }
    return (
        <View>
            <ScrollView w="100%" h="80">
                <Container mt="3" mb="4" ml="4">
                    <Heading fontSize="xl">来週のイベント</Heading>
                </Container>

                <ScrollView
                    horizontal={true}
                    height = "33%"
                    width="100%"
                    // bgColor="emerald.400"
                >
                    <HStack>
                        {/* <Center bg="primary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">Box</Center>
                        <Center bg="primary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">Box</Center>
                        <Center bg="primary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">Box</Center> */}
                        {items}
                    </HStack>
                    <Card />
                </ScrollView>
            </ScrollView>
        </View>
    ) 
};

export default BookScreen;