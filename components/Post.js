import Link from "next/link"

export default function Post ({post}) {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
      <span className="cursor-pointer text-blue-600 border-b border-blue-200 hover:bg-gray-200">{post.title}</span>
      </Link>
      
    </div>
  )
}
