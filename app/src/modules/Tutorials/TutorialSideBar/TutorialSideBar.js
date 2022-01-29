import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, GridItem, IconButton, useDisclosure } from "@chakra-ui/react";
import dynamic from 'next/dynamic'; 
const MarkdownRenderer = dynamic(
  () => import("@Modules/Tutorials/components/MarkdownRenderer/MarkdownRenderer"),
  { ssr: false }
);

function TutorialSideBar(props) {
    const { prompt } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <IconButton onClick={onOpen} borderRadius={0} maxW="sm"
                icon={<HamburgerIcon boxSize="2em" />} 
            />
            <Drawer size="lg" placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px" bgColor="ce_mainmaroon" padding={0}>
                        <IconButton onClick={onClose} borderRadius={0} height="100%" pl={15} justifyContent={"start"}
                            icon={
                                <><HamburgerIcon color="ce_white" boxSize="2em" /><ChevronLeftIcon color="ce_white" boxSize="3em" position="absolute" right="0"/></>
                            } 
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <MarkdownRenderer>
                        {prompt}
                        </MarkdownRenderer>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default TutorialSideBar