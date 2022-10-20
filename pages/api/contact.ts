import type { NextApiRequest, NextApiResponse } from 'next'
const Mailjet = require('node-mailjet');


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE
  });

  mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "info@belga.com.ar",
            Name: "Belga Inmobiliaria"
          },
          To: [
            {email: 'info@belga.com.ar'},
            // {email: 'AR5054@resultadistas.com'},
            {email: 'alfieri.juan@gmail.com'},
          ],
          Subject: body.subject || "Contacto",
          TextPart: `
            Nueva consulta ${body.subject || "Contacto"}
            Nombre: ${body.name}.
            Telefono de contacto: ${body.phone}.
            E-mail: ${body.email}
            ${body.direction ?? `Direccion: ${body.direction}`}
            ${body.message ?? `Mensaje: ${body.message}`}
            ${body.property ?? `Tipo de Propiedad: ${body.property}`}
            ${body.url ?? `URL: ${body.url}`}
          `,
        }
      ]
    })
    .then(() => {
      res.status(200).json({code: 1})
    })
    .catch((err: any) => {
      res.status(400).json({code: 0, error: err.statusCode, body: err.body})
    });
}