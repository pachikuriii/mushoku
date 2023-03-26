"use client";
import { useAuthContext } from "../context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Page() {
  const user = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  return <h1>Only Logged in users can view this page</h1>;
}

export default Page;
