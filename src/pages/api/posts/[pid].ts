import { PrismaClient, Post } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query
  if (!pid || typeof pid !== 'string') return res.status(403);

  switch (req.method) {
    case 'PUT':
      res.json(updatePost(pid, req.body.data));
      break;
    case 'DELETE':
      res.json(deletePost(pid));
      break;
    default:
      res.json(getPost(pid));
  }
}

async function getPost(pid: string): Promise<Post | null> {
  return await prisma.post.findUnique({
    where: {
      id: parseInt(pid)
    }
  })
}

async function updatePost(pid: string, data: any) {
  return await prisma.post.update({
    where: {
      id: parseInt(pid)
    },
    data
  })
}

async function deletePost(pid: string) {
  return await prisma.post.delete({
    where: {
      id: parseInt(pid)
    },
  })
}
