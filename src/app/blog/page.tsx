"use client";

import "./index.scss";

import Hero from "src/components/hero";
import Image from "next/image";
import LinesEllipsisLoose from "react-lines-ellipsis/lib/loose";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { fadeInUp } from "src/lib/framerMotion";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date.createdAt), new Date(b.date.createdAt))
  );

  const highlightPost = allPosts
    .filter((post) => /true/.test(post.highlighted))
    .slice(0, 1)[0];

  return (
    <>
      <Hero />
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-wrapper blog"
      >
        <div className="highlighted-post">
          <Link href={highlightPost.url} className="post">
            <div className="cover-image">
              <Image
                src={highlightPost.coverImage}
                alt={highlightPost.title}
                width={364}
                height={192}
              />
            </div>
            <div className="content">
              <span className="badge">Featured Post</span>
              <div className="title">
                <span>{highlightPost.title}</span>
              </div>
              <div className="excerpt">
                <span>{highlightPost.excerpt}</span>
              </div>
            </div>
          </Link>
        </div>
        <ul className="blogpost-list">
          {posts.map((post, index) => (
            <Link key={index} href={post.url} className="post">
              <li>
                <div className="cover-image">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="content">
                  <LinesEllipsisLoose
                    text={post.title}
                    maxLine="2"
                    lineHeight="32px"
                    className="title"
                  />
                  <LinesEllipsisLoose
                    text={post.excerpt}
                    maxLine="2"
                    lineHeight="32px"
                    className="excerpt"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Blog;
