import prisma from "@/lib/prisma";
import { caller, trpc } from "@/trpc/server";
import { Client } from "./client";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function HomePage() {
  // const users= await prisma.user.findMany();
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  const users = await caller.getUsers();

  console.log(users);
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
        <Client/>
        </Suspense>
      </HydrationBoundary>
    </main>
  );
}
