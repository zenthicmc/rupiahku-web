import QrScanner from "@/components/QrScanner";
import { Box, Container } from "@chakra-ui/react";

export default function Scanner() {
	return (
      <>
         <Container width={"sm"} minH={"100vh"}>
            <QrScanner />
				<Box bg={"gray.100"} p={4}>
					<p>
						<strong>Nota:</strong> Este componente no funciona en dispositivos iOS.
					</p>
				</Box>
         </Container>
      </>
   );
}