"use server";

import { revalidatePath } from "next/cache";

export async function mutate(param: string) {
  console.log("Got", { param });
  revalidatePath("/");
}
