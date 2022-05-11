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
            <section className={utilStyles.headingMd}>
                <h1>About</h1>
                <p>Full-stack developer with a priority on producing robust user-focused applications. Highly driven individual with the ability to work independently or as a team member. Expert problem solver with a demonstrated ability to add value to business processes and procedures. Goal-oriented focuses on clean code, learning new technologies, and meeting deadlines.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Recent</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, type, description, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
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
                <Link href="/all-posts">See all posts</Link>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData: allPostsData.slice(0, 3),
        },
    };
};
