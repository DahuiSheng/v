import React, { ReactElement, useState } from "react";
import { View, Text, Box, Center, Checkbox, Heading, HStack, Icon, IconButton, Input, useToast, VStack, useTheme, ScrollView, Container, Card, Button } from "native-base"
import { Feather, Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const BookScreen = () => {
    const {
        colors
    } = useTheme();

    // 画面からサイズを取得
    const { width } = Dimensions.get("window");


    // アイテムの追加
    const [items, setItems]: [
        ReactElement[],
        React.Dispatch<React.SetStateAction<ReactElement[]>>
    ] = useState<ReactElement[]>(
        [...Array(2)].map((v, i) => {
            return <Center key={i} bg="primary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">Item</Center>
        })
    );

    // アイテムを追加する構文
    const addItem = () => {
        setItems([...items, <Center key={ items.length } bg="secondary.400" m="2" w={width * 0.6} h="32" rounded="md" _text={{ color: 'white' }} shadow="1">Item</Center>])
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
                </ScrollView>
                <Button onPress={ addItem }>アイテムを追加</Button>
            </ScrollView>
        </View>
    ) 
};

export default BookScreen;