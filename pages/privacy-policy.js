import fs from 'fs'
import remark from 'remark'
import html from 'remark-html'
import { join } from 'path'
import Head from 'next/head'
import Layout from '@/components/layout';
import SEO from '@/components/SEO';
import markdownStyles from '@/styles/Markdown.module.css'

async function markdownToHtml(markdown) {
  const result = await remark().use(html, {sanitize: false}).process(markdown)
  return result.toString()
}

export default function MDPage({content}) {
  return (
    <Layout>

      <SEO
        title="Privacy Policy"
        description="Learn more about our privacy policy"
      />
      <h1>Privacy Policy</h1>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {

  const postsDirectory = join(process.cwd(), 'markdown')
  const fullPath = join(postsDirectory, `privacy-policy.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const content = await markdownToHtml(fileContents || '')

  return {
    props: {
      content
    }
  }
}
