import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch('http://example.com');
    const html = await response.text();

    // Now you can work with the HTML as a string
    console.log(html);

    res.status(200).json({ html });
}
