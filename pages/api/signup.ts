// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type resData = {
  name: string;
  email: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<resData>
) {
    res.status(200).json({ name: `${req.body.firstname} ${req.body.lastname}`, email: req.body.email });
}
