export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }))
  }