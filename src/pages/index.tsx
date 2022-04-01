import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const posts = trpc.useQuery(["post.all"]);

  if (!posts.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.data.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default Home;
