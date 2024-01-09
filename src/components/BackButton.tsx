'use client'
import { BiArrowBack } from "react-icons/bi";
import { Button } from "@chakra-ui/react";

export default function BackButton({ color }: { color: string }) {
	return (
      <Button
         pos={"absolute"}
         top={4}
         left={4}
         zIndex={1}
         p={0}
         m={0}
         cursor={"pointer"}
         bg={"none"}
         _hover={{ bg: "none" }}
         onClick={() => window.history.back()}
      >
         <BiArrowBack
            size={25}
            color={color}
         />
      </Button>
   );
}