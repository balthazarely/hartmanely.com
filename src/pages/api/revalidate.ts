import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  if (req.headers["x-revalidate-secret"] !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  const { paths } = req.body as { paths?: string[] };
  if (!paths?.length) return res.status(400).json({ message: "No paths provided" });

  try {
    await Promise.all(paths.map((path) => res.revalidate(path)));
    return res.json({ revalidated: true, paths });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
