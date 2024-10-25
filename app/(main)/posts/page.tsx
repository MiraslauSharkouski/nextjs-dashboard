import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
    </>
  );
};

export default PostPage;
