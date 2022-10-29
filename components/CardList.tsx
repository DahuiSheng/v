import React, { useContext } from "react";
import {
    AspectRatio,
    Box,
    Center,
    Heading,
    HStack,
    Stack,
    Text,
    Image,
} from "native-base";

export interface Photo {
    download_url: string;
    id: string;
    author: string;
}

interface IProps {
    photos: Photo[];
}

const CardList = (props: IProps) => {
    return (
        <>
        {props.photos.map(photo => (
            <>
                <Box key={photo.id}
                    bgColor="gray.300"
                    height={300}
                >
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                            source={{ uri: photo.download_url }}
                            alt="image" />
                    </AspectRatio>
                    <Center
                        bg="violet.500" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="8" px="3" py="1.5"
                    >
                        {photo.author}
                    </Center>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                            }} fontWeight="400"
                            >
                                {photo.download_url}
                            </Text>
                        </HStack>
                    </HStack>
                </Box>
            </>
        ))}
        </>
    );
};

export default CardList;