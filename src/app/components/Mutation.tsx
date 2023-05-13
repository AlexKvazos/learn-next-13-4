"use client";

import { useTransition } from "react";
import { mutate } from "~/app/actions";

export default function Mutation() {
  const [_, startTransition] = useTransition();

  return (
    <>
      <button onClick={() => startTransition(() => mutate("Hi"))}>
        Mutate
      </button>
    </>
  );
}
