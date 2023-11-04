import BackButton from "@/components/BackButton";
import { Container, Text, Box, Image, Stack, Input, Button } from "@chakra-ui/react";


export default function ubahPassword(){
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
                    <Text fontWeight={'600'}>Password Lama</Text>
                    <Input 
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder="Masukkan Password Lama"/>
                    <Text fontWeight={'600'}>Password Baru</Text>
                    <Input
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder=" Masukkan Password Baru"/>
                    <Text fontWeight={'600'}>Konfirmasi Password</Text>
                    <Input
                        size={'sm'}
                        borderRadius={'8'}
                        shadow={'0 0 0 1px lightgrey'}
                        placeholder="Masukkan Kembali Password"/>
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