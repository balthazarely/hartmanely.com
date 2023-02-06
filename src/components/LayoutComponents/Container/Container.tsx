import clsx from "clsx";
import React from "react";

export function Container({ className, ...props }: any) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
