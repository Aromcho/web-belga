import type { NextApiRequest, NextApiResponse } from 'next'
import { getPropertyById } from 'services'
import { jsPDF } from "jspdf";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const property: any = await getPropertyById(parseInt(req.query.id as string));

  const doc = new jsPDF();
  doc.text("asdqwe", 10, 10);
  const buffer = await doc.save("a4.pdf");
  // res.status(200).json({});
  res.send(buffer);
}