import { Box, Flex, Grid, GridItem, Heading, HStack } from "@chakra-ui/layout";

/**
 * Contains the shared header for each page. Only render user icon if logged in.
 */
function Footer(props) {

    return(
        <Box p={1} bgColor="ce_darkgrey" w="100%" color="ce_white" position="absolute">
            <Grid templateColumns="repeat(5, 1fr)" gap={6} pl={5} pr={5}>
                <GridItem colSpan={2} colEnd={6}>
                    <Flex height="100%" justifyContent="right" alignItems="center">
                        <HStack spacing={3}>
                            {props.children}
                        </HStack>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Footer;