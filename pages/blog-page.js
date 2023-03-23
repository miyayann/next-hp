import Layout from "../components/Layout"
import { Post } from "../components/Post";
import { getAllPostsData } from "../lib/post";

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: {
      posts
    }
  }
}

const Blog = ({posts}) => {
  return (
    <Layout title='Blog'>
      <ul className="m-10">
        {posts && posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  )
}

export default Blog