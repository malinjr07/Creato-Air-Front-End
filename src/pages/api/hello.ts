// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { industryArr } from '@/utils/lib/constants';
import { withAllowedMethods } from '@/utils/lib/methods';
import type { NextApiRequest, NextApiResponse } from 'next';

type tResponse = { message: string };

const handler = (req: NextApiRequest, res: NextApiResponse<tResponse>) => {
  // if (req.method === 'GET') {
  // Handle GET request
  res.status(200).json({ message: 'This is a GET request' });
  // } else {
  //   /* else if (req.method === 'POST') {
  // Handle POST request
  //   res.status(200).json({ message: 'This is a POST request' });
  // } */
  // Handle unsupported methods
  //   res.setHeader('Allow', ['GET']);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
  // console.log('Requesting Data', industryArr.length);
  // const setData = new Set(industryArr);
  // console.log('set Size', setData.size);
  // res.status(200).json([...setData]);
};

export default withAllowedMethods(['GET'], handler);
