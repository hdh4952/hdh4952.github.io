import {allPosts} from '.contentlayer/generated'

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    id: post._raw.flattenedPath
  }));
}

const PostDetailPage = ({params} : {params: {id: string}}) => {
  return (<div>POST {params.id}</div>)
}

export default PostDetailPage;