import { Box, HStack, ScrollView, Image, Heading, Text, Spacer } from 'native-base';
import React, { useState } from 'react';
import Rating from '../Components/Rating';
import NumericInput from "react-native-numeric-input";
import Colors from '../color';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';


function SingleProductScreen() {
    const[value, setValue] = useState(0);
    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={require("../../assets/images/3.png")} 
                alt="Image"
                w="full" 
                h={300} 
                resizeMode="contain"
                 />
                 <Heading  bold fontSize={15} mb={2} lineHeight={22}>
                    New adidas Shoes 
                 </Heading>
                    <Rating value={3} />
                    <HStack space={2} alignItems="center" my={5}>
                        <NumericInput 
                        value={value} 
                        totalWidth={140}
                         totalHeight={30}
                         iconSize={25}
                         step={1}
                         maxValue={50}
                         minValue={0}
                         borderColor={Colors.deepgray}
                         rounded
                         textColor={Colors.black}
                         iconStyle={{color: Colors.white}}
                         rightButtonBackgroundColor={Colors.main}
                         leftButtonBackgroundColor={Colors.main}
                         />
                         <Spacer/>
                         <Heading bold color={Colors.black} fontSize={19}>
                            $400</Heading>
                    </HStack>
                    <Text lineHeight={24} fontSize={12}>
                        Product description.
                    </Text>
                    <Buttone bg={Colors.main} color={Colors.white} mt={10}>
                        ADD TO CART
                    </Buttone>
                    <Review  />
                 </ScrollView>
        </Box>
    );
}

export default SingleProductScreen;