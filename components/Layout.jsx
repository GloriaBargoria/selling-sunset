import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout =({children}) => (
    <>
        <Head>
            <title>Selling Sunset</title>
        </Head>
        <Box maxWidth="1280" m="auto"> 
            <navbar>
                <Navbar />
            </navbar>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout;