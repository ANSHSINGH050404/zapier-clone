"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";


export const Client = () => {

  const trpc = useTRPC();

  const {data:users} = useSuspenseQuery(trpc.getUsers.queryOptions());

  console.log("Client Users Data:", users);

    return (
        <div>{JSON.stringify(users)}</div>
    )
}