"use client";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    // If the session is expired or the user is not logged in, log them out
    if (status === "unauthenticated") {
      signOut({ redirect: false }).then(() => {
        router.push("/login"); // Redirect to login instead of "/"
      });
    }
  }, [status, router]);

  return <>{children}</>;
};

export default SessionWrapper;


