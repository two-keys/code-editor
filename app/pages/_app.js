import { ChakraProvider } from "@chakra-ui/react"
import Header from "@Components/Header/Header";
import theme from '@Utils/theme'
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </CookiesProvider>
  )
}

export default MyApp