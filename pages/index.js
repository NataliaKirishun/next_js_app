import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function ArticleLink(props) {
  return (
    <li>
      <Link as={`/a/${props.id}`} href={`/article?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <ArticleLink id="first-article" title="First Article" />
        <ArticleLink id="second-article" title="Second Article" />
        <ArticleLink id="third-article" title="Third Article" />
      </ul>
    </Layout>
  )
}