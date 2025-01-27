import { NextApiRequest, NextApiResponse } from 'next';

type tApiFunctionType = (req: NextApiRequest, res: NextApiResponse) => void;

type ResponseData = {
  message: string;
};

// Define a function for GET requests
const handleGet = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({ message: 'This is a GET request' });
};

// Define a function for POST requests
const handlePost = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  res.status(200).json({ message: 'This is a POST request' });
};

// Dispatcher to route methods to their respective handlers
const methodHandlers: Record<string, tApiFunctionType> = {
  GET: handleGet,
  POST: handlePost,
};

const handler: tApiFunctionType = (req, res) => {
  const methodHandler = methodHandlers[req.method ?? ''];
  console.log('🚀 ~ handler ~ methodHandler:', methodHandler);

  if (!methodHandler) {
    res.setHeader('Allow', Object.keys(methodHandlers));
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  methodHandler(req, res);
};
export default handler;
