import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// next js seo 

export const getStaticProps = async () => {
    const ressponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await ressponse.json()
    console.log(data);
    return {
        props: {
            data
        }
    }
}

export default function Blog({ data }) {
    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            Welcome to My blog
            {data.map(d => (
                <div>
                    <Link href={`/blog/${d.id}`}><a>{d.title}</a></Link>
                    <br />
                </div>
            ))}
        </div>
    )
}
