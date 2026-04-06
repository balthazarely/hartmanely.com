import { getNavProjects } from "@/lib/payload";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const nav = await getNavProjects();
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.status(200).json(nav);
}
