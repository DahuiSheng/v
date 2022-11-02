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
    ScrollView
} from "native-base";
import NativeBaseIcon from "../components/NativeBaseIcon";


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

const HomeScreen = () => {
    return (
            <View>

                {/* 背景画像の色を設定 */}
                <ScrollView
                    w="100%" h="100%"
                    _dark={{ bg: "blueGray.900" }}
                    _light={{ bg: "blueGray.50" }}
                >
                    <Center
                        pt={12}
                        px={4}
                        flex={1}
                    >
                        <VStack space={5} alignItems="center">
                            {/* NativeBaseのアイコン */}
                            <NativeBaseIcon />

                            {/* Welcome to NativeBase */}
                            <Heading size="lg">Welcome to NativeBase</Heading>
                            
                            {/* Edit App.tsx and save to reload */}
                            <HStack space={2} alignItems="center">
                                <Text>Edit</Text>
                                <Box
                                    _web={{
                                    _text: {
                                        fontFamily: "monospace",
                                        fontSize: "sm",
                                    },
                                    }}
                                    px={2}
                                    py={1}
                                    _dark={{ bg: "blueGray.800" }}
                                    _light={{ bg: "blueGray.200" }}
                                >
                                    App.tsx
                                </Box>
                                <Text>and save to reload.</Text>
                            </HStack>

                            {/* リンク情報 */}
                            <Link href="https://docs.nativebase.io" isExternal>
                                <Text color="primary.500" underline fontSize={"xl"}>
                                    Learn NativeBase
                                </Text>
                            </Link>

                            {/* ダークモード切り替え */}
                            <ToggleDarkMode />
                        </VStack>
                    </Center>
                </ScrollView>
            </View>
    );
};

// Color Switch Component
function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
  );
}

export default HomeScreen;