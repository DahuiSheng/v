import React, { useEffect, useState } from "react";
import { View, Text, Spinner } from "native-base";

const TrendScreen = () => {
    // const [ photos, setPhotos ] = useState([]);
    // const [ loading, setLoading ] = useState(true);
    // useEffect(() => {
    //     let unmounted = false;
    //     const init = async () => {
    //         const photos = await getPhotos();
    //         if (!unmounted) {
    //             setLoading(false);
    //             setPhotos(photos);
    //         }
    //     } ;
    //     init();

    //     //Cleanup関数
    //     return () => {
    //         unmounted = true;
    //     };
    // }, [photos]);

    // const content = loading ? <Spinner /> : <CardList photos={photos} />

    return (
        <View>
            {/* {content} */}
            <Text>
                View
            </Text>
        </View>
    );
};

export default TrendScreen;



const getPhotos = () => {
    return fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .catch(err => console.error(err));
};