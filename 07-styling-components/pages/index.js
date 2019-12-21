import Layout from '../components/MyLayout';
import Link from 'next/Link';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id:'learn-nextjs', title:'Learn Next.js is awesome' },
        { id:'deploy-nextjs', title:'Deploy apps with ZEIT' },
    ];
}

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            a {
                font-family: 'Arial';
                text-decoration: none;
                color: blue;
            }

            a: hover {
                opacity: 0.6;
            }

            li{
                list-style:none;
                margin: 5px 0;
            }
        `}</style>
    </li>
);
/*
<li key={post.id}>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
    </Link>
</li>
                        */
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                h1{
                    font-family: 'Arial';
                }

                ul{
                    padding:0;
                }    
            `}</style>
        </Layout>
    );
}

/**/
