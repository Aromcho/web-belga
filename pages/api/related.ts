import type { NextApiRequest, NextApiResponse } from 'next'
import { getProperties } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { objects } = await getProperties({params: req.query});
  res.status(200).json(objects)
}