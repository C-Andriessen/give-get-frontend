import { Post, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next"
import { NextApiResponse } from "next"
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      createPost(req, res);
      break;
    default:
      findAll(req, res);
  }
}

async function findAll(req: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany({
    skip: 0,
    take: 5,
  })

  res.json(posts);
}

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const post = await prisma.post.create({
    data: req.body
  })
  
  res.json(post);
}
