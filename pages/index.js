import { useState, useEffect } from "react";
import Head from "next/head";
import fire from "../config/fire-config";
import Link from "next/link";
import VideoHero from "../components/VideoHero";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Old Man</title>
      </Head>
      <VideoHero />
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href="/blog/[id]" as={"/blog/" + blog.id}>
              <a className="home-link" itemProp="hello">
                {blog.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
