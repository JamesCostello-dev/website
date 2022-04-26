import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({ allPostsData }: { allPostsData: { date: string; type: string; title: string; id: string; description: string }[] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h1 className={utilStyles.headingLg}>Articles</h1>
                <ul className={utilStyles.list}>
                    {allPostsData
                        .filter((post) => post.type === "Article")
                        .map(({ id, date, type, description, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/articles/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>{type}</small>
                                <br />
                                <small>{description}</small>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                </ul>
                <br />
                <Link href="/projects">View projects</Link>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData: allPostsData,
        },
    };
};
