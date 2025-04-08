"use client"; 

import { useEffect } from "react";
import { useRouter } from "next/router";
import { account } from "../../appwrite"; 

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // logout function
    const logout = async () => {
      try {
        await account.deleteSession("current"); // delete current session
        router.push("/auth/login"); // redirect to login page after logout
      } catch (error) {
        console.error("Logout failed", error);
        alert("Logout failed. Please try again.");
      }
    };

    logout(); // call the logout function
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <p className="text-center">Logging out...</p>
    </div>
  );
};

export default LogoutPage;