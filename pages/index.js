import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <h1>
        Hello, Next.js
    </h1>
      <h2>
        <Link href="/about">
          <div style={{ background: 'black', color: 'white' }}>Introduction</div>
        </Link>
      </h2>
    </Layout>
  )
}

export default Index;