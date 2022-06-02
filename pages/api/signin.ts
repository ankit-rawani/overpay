// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type resData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<resData>
) {
  const { username } = req.body;
  res.status(200).json({ name: username });
}
