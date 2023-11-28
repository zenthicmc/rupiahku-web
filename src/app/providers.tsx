"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <CookiesProvider
         defaultSetOptions={{
            path: "/",
            expires: new Date(Date.now() + 31100000000), // expire 1 year
         }}
      >
         <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
         </CacheProvider>
      </CookiesProvider>
   );
}
