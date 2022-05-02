import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { format } from "date-fns";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const name = "James Costello";
const YEAR = format(new Date(), "yyyy");
export const siteTitle = "James Costello";
export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
    return (
        <div>
            <div className={styles.headerDiv}>
                <div className={styles.action}>
                    <Link href="mailto: jcostellodev@gmail.com">
                        <a target="_blank">
                            <MdEmail /> Contact
                        </a>
                    </Link>
                </div>
                <header className={styles.header}>
                    <h1 className={utilStyles.headerLink}>
                        <Link href="/">
                            <a>James Costello</a>
                        </Link>
                    </h1>
                    <>
                        <ul className={utilStyles.navList}>
                            <li>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles">
                                    <a>Articles</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={utilStyles.iconList}>
                            <li>
                                <Link href="https://github.com/jamescostello-dev">
                                    <a target="_blank">
                                        <FaGithub />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com/in/jamescostello-dev">
                                    <a target="_blank">
                                        <FaLinkedin />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/jco_dev">
                                    <a target="_blank">
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </>
                    <div className={utilStyles.toggleMenu}>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <ul className={utilStyles.menu}>
                            <li>
                                <Link href="/">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles">
                                    <a>Articles</a>
                                </Link>
                            </li>
                            <br />
                            <h3>Contact</h3>
                            <li>
                                <Link href="https://github.com/jamescostello-dev">
                                    <a target="_blank">Github</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com/in/jamescostello-dev">
                                    <a target="_blank">Linkedin</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/jco_dev">
                                    <a target="_blank">Twitter</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="James Costello Full-Stack Developer" key="desc" />
                    <meta name="title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <main>{children}</main>
            </div>
            <div className={styles.footerDiv}>
                <footer className={styles.footer}>
                    &copy; James Costello, {YEAR}
                    <>
                        <Link href="https://github.com/jamescostello-dev/website">
                            <a target="_blank">
                                <FaGithub /> Source
                            </a>
                        </Link>
                    </>
                </footer>
            </div>
        </div>
    );
}
