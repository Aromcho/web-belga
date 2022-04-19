import type { NextApiRequest, NextApiResponse } from 'next'
import { getPropertiesById } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { objects } = await getPropertiesById(req.query.list as string);
  res.status(200).json(objects)
}