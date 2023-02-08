import clsx from "clsx";
import React from "react";

export function Container({ className, noPadding = false, ...props }: any) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8",
        className,
        noPadding ? "" : "py-16  md:py-20"
      )}
      {...props}
    />
  );
}
