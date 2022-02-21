import { Center, Divider, Flex, Grid, Heading, Container } from "@chakra-ui/layout";
import Main from "@Components/Main/Main";
import SectionHeader from "@Components/SectionHeader/SectionHeader";
import SNoLink from "@Components/SNoLink/SNoLink";
import SNoLinkButton from "@Components/SNoLinkButton/SNoLinkButton";
import { loggedIn } from "@Modules/Auth/Auth";
import SettingsForm from "@Modules/Auth/components/SettingsForm/SettingsForm";
import Router from 'next/router';
import { useCookies } from "react-cookie";

function Settings() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const isLoggedIn = loggedIn(cookies.user);

    return(
        <Container w="450px">     
            <Center>
                <Grid templateRows="5 1fr" gap={6} width="100%" borderRadius="md" border="1px solid" borderColor="ce_middlegrey" mt={5} padding={10}>
                    <Heading as="h2" fontWeight="bold">ACCOUNT</Heading>
                    <SettingsForm />

                </Grid>
            </Center>
        </Container>
    );
}

export default Settings;