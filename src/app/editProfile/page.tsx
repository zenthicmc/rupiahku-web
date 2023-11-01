import BackButton from "@/components/BackButton";
import { Container, Text, Box, Image, Stack, Input, Button } from "@chakra-ui/react";


export default function editProfile(){
    return(
        <Container width={'sm'} background={'white'} minHeight={'100vh'} padding={'0'}>
            <Box position={'relative'}>
                <BackButton color="black"/>
                <Image
                    src="./hero.jpg"
                    alt="Hero"
                    width={'full'}
                />
                <Image
                    src="./man.png"
                    alt="Profile"
                    position={'absolute'}
                    height={'100px'}
                    right={'0'}
                    left={'0'}
                    top={'10'}
                    margin={'auto'}
                />
            </Box>
            <Box padding={'10'}>
                <Stack>
                    <Text fontWeight={'600'}>Nama</Text>
                    <Input 
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder="Masukkan Nama"/>
                    <Text fontWeight={'600'}>Nomor Ponsel</Text>
                    <Input
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder=" Masukkan Nomor Ponsel"/>
                    <Text fontWeight={'600'}>Alamat Email</Text>
                    <Input
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder="Masukkan Alamat Email"/>
                </Stack>
            </Box>
            <Box padding={'10'}>
                <Button 
                colorScheme="red"
                size={'sm'}
                width={'full'}
                borderRadius={'lg'}
                top={'110px'}
                bottom={'0'}>Simpan</Button>
            </Box>
        </Container>
    );
}