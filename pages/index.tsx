import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({ allPostsData }: { allPostsData: { date: string; type: string; title: string; id: string }[] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1>About</h1>
                <p>Full stack developer based out of Phoenix, Arizona. I started programming 2 years ago after spending the better part of a decade as a financial services professional. I'm a bootcamp graduate from University of Arizona with an associates in information technology from University of Phoenix. The content of this site details my journey; where I started, where I am now, and what I'm currently learning.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Recent</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, type, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>{type}</small>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
                <br />
                <Link href="/all-posts">Read more</Link>
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
