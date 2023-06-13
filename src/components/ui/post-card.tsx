import { Post } from "@/types/post";
import Image from "next/image";

const PostCard = ({ post, classes }: { post: Post; classes?: String }) => {
  return (
    <div
      className={`p-4 relative flex flex-col flex-wrap bg-cardBackground rounded-xl overflow-hidden shadow-xl h-96 ${
        post.image ? "text-white" : "text-text-primary bg-white"
      } ${classes}`}
    >
      <div className="flex flex-col flex-wrap z-[3] justify-between w-full h-full">
        <h3 className="text-lg font-bold">{post.title}</h3>

        <p className="flex-1">{post.body}</p>

        <span>
          {post.author} • {post.date}
        </span>
      </div>

      {post.image && (
        <>
          <div className="absolute bg-black/50 top-0 left-0 z-[2] w-full h-full" />

          <Image
            src={post.image}
            width={200}
            height={300}
            alt="Post image"
            className="absolute top-0 left-0 object-cover object-center z-[1] w-full h-full blur-[2px]"
          />
        </>
      )}
    </div>
  );
};

export default PostCard;
