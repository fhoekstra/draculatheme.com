"use client";

import "./index.scss";

import { format, parseISO } from "date-fns";

import Hero from "src/components/hero";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { motion } from "framer-motion";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
//   return { title: post.title };
// };

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <Hero />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="page-wrapper blog-post"
      >
        <div className="cover-image">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={400}
            height={200}
          />
        </div>
        <div className="author-and-date">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="avatar"
          />
          <span>{post.author.name}</span>
          <span>|</span>
          <span>
            <time dateTime={post.date.createdAt}>
              {format(parseISO(post.date.createdAt), "LLLL d, yyyy")}
            </time>
          </span>
        </div>
        <h1>{post.title}</h1>
        <div className="content-wrapper">
          <Content />
        </div>
      </motion.article>
    </>
  );
};

export default PostLayout;
