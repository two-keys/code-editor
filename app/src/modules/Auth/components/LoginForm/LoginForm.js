import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Grid } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { login, maxAgeInHours } from "@Modules/Auth/Auth";
import toastError from "@Utils/toastError";
import { useState } from "react";
import { useCookies } from "react-cookie";

function LoginForm() {
    const [email, setEmail] = useState("placeholder");
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(["user"]);
    const [passwordError, setPasswordError] = useState(undefined);

    async function handleSubmit(event) {
        try {
            setPasswordError(undefined);
            let res = await login(event);
            const token = res.data;

            const envDependentSettings = {};
            if (process.env.NODE_ENV !== "development") {
                envDependentSettings = {
                    domain: (proces.env.NEXT_PUBLIC_VERCEL_URL) ? proces.env.NEXT_PUBLIC_VERCEL_URL : 'localhost',
                    /**    
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    */
                }
            }

            if (token) {
                setCookie("user", token, { 
                    path: "/",
                    maxAge: maxAgeInHours * 60 * 60, //seconds
                    sameSite: true, 
                    ...envDependentSettings,
                })
            }
        } catch(e) {
            if(e.response) {
               const status = e.response.data.statusCode;

               if(status == 400) {
                   setPasswordError("Password Incorrect");
               }
            }
        }
    }

    return(
        <form onSubmit={handleSubmit} w="100%">
            <Grid templateRows="5 1fr" gap={6} w="100%">
                <FormControl id="email" isRequired>
                    <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired isInvalid={passwordError}>
                    <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                    {passwordError ? (
                        <FormErrorMessage>{passwordError}</FormErrorMessage>
                    ) : null}
                </FormControl>
                <Button variant="white" type="submit">Sign In</Button>
            </Grid>
        </form>
    );
}

export default LoginForm;