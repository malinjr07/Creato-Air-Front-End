import { NextApiRequest, NextApiResponse } from 'next';

type AllowedMethods = 'GET' | 'POST';

export function withAllowedMethods(
  allowedMethods: AllowedMethods[],
  handler: (req: NextApiRequest, res: NextApiResponse) => void,
) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (!allowedMethods.includes(req.method as AllowedMethods)) {
      res.setHeader('Allow', allowedMethods);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }
    return handler(req, res);
  };
}
