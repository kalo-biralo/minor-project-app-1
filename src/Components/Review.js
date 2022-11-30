import { Box, Heading, Text, VStack, FormControl, Select, CheckIcon} from 'native-base';
import React from 'react';
import Colors from '../color';
import Rating from './Rating';
import Message from './Notifications/Message';

function Review() {
    return (
        <Box my={9}>
            <Heading bold fontSize = {15} mb={2}>
                REVIEW
            </Heading>
            <Box 
            p={3} 
            bg={Colors.deepgray} 
            mt={5}
            rounded={5}>
                <Heading 
                fontSize={15}
                color={Colors.black}>
                    User Doe
                </Heading>
                <Message color={Colors.deepgray}
                bg={Colors.main}
                bold
                size={14}
                children={"NO REVIEW"} />
                <Rating value={4} />
                <Text mb={2} fontSize={11}>
                    Jan 12 2022</Text>
                <Message color={Colors.black}
                bg={Colors.white}
                size={14}
                children={"Dummy product review for the shoes"} />
            </Box>
            <Box mt={6}>
            <Heading fontSize = {15} bold mb={4}>
                WRITE A REVIEW
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label
                    _text={{
                        fontSize:"12px",
                        fontWeight:'bold', 
                    }}
                    >
                        Rating
                    </FormControl.Label> 
                    <Select bg={Colors.subGreen}
                    borderWidth={0}
                    rounded={5}
                    py={3}
                    placeholder="Choose Rate"
                    _selectedItem = {{
                        bg: Colors.subGreen,
                        endIcon:<CheckIcon
                        size={3} />
                    }}>
                       <Select.Item label="1 - Terrible" value="1" /> 
                       <Select.Item label="2 - Poor" value="2" />
                       <Select.Item label="3 - Fair" value="3" />
                       <Select.Item label="4 - Good" value="4" />
                       <Select.Item label="5 - Excellent" value="5" />
                    </Select>

                </FormControl>
            </VStack>
            </Box>
        </Box>
    )
}

export default Review;

