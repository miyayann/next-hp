import Link from "next/link";
import { getAllIds, getPostData } from "../../lib/post";
import Layout from '../../components/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false,
  }; 
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

export default function Post({post}) {
  if(!post) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={post.title}>
      <p>{"ID: "}{post.id}</p>
      <p className="text-center text-xl font-bold mt-2">{post.title}</p>
      <p className="flex text-center w-2/3 ">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#00050f",}} />
        <span className="ml-2">Back to blog-page</span>
        </div>
      </Link>
    </Layout>
    )
}