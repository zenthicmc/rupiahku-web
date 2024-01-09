import {
   Flex,
   Text,
   Image,
   Skeleton,
   SkeletonCircle,
} from "@chakra-ui/react";

const ProfileName = (props: any) => {
   return (
      <>
         {props.name ? (
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
                  src={props.image}
                  alt="Segun Adebayo"
                  w={12}
                  h={12}
                  borderRadius={"full"}
               />

               <Text
                  fontSize={"lg"}
                  fontWeight={"bolder"}
                  color={"gray.900"}
                  ms={2}
                  textShadow={"0px 0px 5px rgba(255, 255, 255, 0.9)"}
               >
                  {props.name}
               </Text>
            </Flex>
         ) : (
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
               <SkeletonCircle size="14" />
               <Skeleton h={7} ms={2} w={"180px"} />
            </Flex>
         )}
      </>
   );
};

export default ProfileName;
