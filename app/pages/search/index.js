import { Search2Icon } from "@chakra-ui/icons";
import { Box, Center, Flex, HStack, Input, Select, Spacer, Text, VStack } from "@chakra-ui/react";
import Carousel from "@Components/Carousel/Carousel";
import Main from "@Components/Main/Main";
import SNoLink from "@Components/SNoLink/SNoLink";
import CourseBox from "@Modules/Courses/components/CourseBox/CourseBox";

function Search() {
    const courses = [
        {
            id: 16, title: 'A courseassad', description: 'Course stiff' 
        },
        {
            id: 2, title: 'Another??', description: 'Course steff' 
        },
        {
            id: 3, title: 'Anotha One', description: 'Course staff' 
        },
        {
            id: 4, title: 'Anotha One', description: 'Course staff' 
        },
    ];

    const currentCourse = courses[0];

    return (
        <Main>
            <VStack>
                <SNoLink href="/"><img src="/siucode_logo.png" /></SNoLink>
                <HStack spacing={3} id="search">
                    <Input w="lg" id="searchBar" placeholder="Search" /><Search2Icon color="ce_white" boxSize="2em" borderRadius="md" backgroundColor="ce_mainmaroon" padding={2} />
                </HStack>
                <Spacer />
                <HStack w="lg">
                    <Spacer />
                    <Select flexBasis="132px">
                        <option id={"Any"} value={0}>Difficulty</option>
                    </Select>
                    <Spacer />
                    <Select flexBasis="132px">
                        <option id={"Any"} value={0}>Language</option>
                    </Select>
                    <Spacer />
                </HStack>
            </VStack>
            <Flex w="100%" minHeight="654px" alignItems="left" mt={5}>
                <VStack flexBasis="25%">
                    <Carousel direction={'vertical'} items={courses} />
                </VStack>
                <Spacer flexBasis="5%" />
                <CourseBox course={currentCourse} flexBasis="70%" h="100%" />
            </Flex>
        </Main>
    )
}

export default Search;