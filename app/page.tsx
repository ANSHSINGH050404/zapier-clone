"use client"

import { authClient } from "@/lib/auth-client";

export default  function HomePage() {

  const {data}=authClient.useSession();
  
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
     
    </main>
  );
}
