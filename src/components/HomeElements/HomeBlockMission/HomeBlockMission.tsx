import { Container } from "@/components/LayoutComponents";
import React from "react";

export function HomeBlockMission({ statement }: { statement: string }) {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-center ">
          <h2 className="text-center">{statement}</h2>
        </div>
      </Container>
    </div>
  );
}
