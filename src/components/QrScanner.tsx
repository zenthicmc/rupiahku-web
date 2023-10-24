'use client';

import { QrScanner as Scanner } from "@yudiel/react-qr-scanner";

export default function QrScanner() {
   return (
      <Scanner
         onDecode={(result) => console.log(result)}
         onError={(error) => console.log(error?.message)}
         // made height full screen
         containerStyle={{ height: "100vh" }}
			videoStyle={{ height: "100vh" }}
      />
   );
};
