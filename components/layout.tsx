import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { format } from "date-fns";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const name = "James Costello";
const YEAR = format(new Date(), "yyyy");
export const siteTitle = "James Costello"
export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
    return (
        <div>
            <div className={styles.headerDiv}>
                <div className={styles.action}>
                    <Link href="https://twitter.com/messages/compose?text=Hello%20James,%20&recipient_id=1324074806438866944">
                        <a target="_blank">
                            <FaTwitter /> Message
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
                    <meta name="description" content="Learn how to build a personal website using Next.js" />
                    <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <main>{children}</main>
            </div>
            <div className={styles.footerDiv}>
                <footer className={styles.footer}>
                    &copy; James Costello, {YEAR}
                    <>
                        <Link href="https://github.com/jamescostello-dev/jamescostello.dev">
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
