"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to /dashboard/users when the component is mounted
    router.push("/dashboard/users");
  }, [router]);

  return (
    <div>Redirecting to users page...</div>
  );
};

export default Page;
