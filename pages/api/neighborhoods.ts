import type { NextApiRequest, NextApiResponse } from 'next'
import { getNeighborhoods } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { objects } = await getNeighborhoods();
  res.status(200).json(objects.locations)
}