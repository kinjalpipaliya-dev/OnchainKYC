import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import { useEffect } from "react";
import KYCForm from "./kycform/kycform";

export default function Home() {
  // Use the Country Identity hook to get the status of the user.
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar: ", anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LogInWithAnonAadhaar />
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
            <KYCForm />
        )}
    </main>
  );
}