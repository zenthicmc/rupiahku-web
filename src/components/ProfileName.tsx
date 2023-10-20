import {
   Flex,
   Text,
   Image,
} from "@chakra-ui/react";

const ProfileName = () => {
   return (
      <Flex
         justifyContent={"start"}
         alignItems={"center"}
         w={"90%"}
         pos={"absolute"}
         top={"8"}
         left={"0"}
         right={"0"}
         margin={"auto"}
      >
         <Image
            src="/man.png"
            alt="Segun Adebayo"
            w={14}
            h={14}
            borderRadius={"full"}
         />

         <Text
            fontSize={"lg"}
            fontWeight={"bolder"}
            color={"gray.900"}
            ms={1}
            textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
         >
            Jagad Raya R
         </Text>
      </Flex>
   );
};

export default ProfileName;
