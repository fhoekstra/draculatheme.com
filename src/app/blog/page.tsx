import "./index.scss";

import { compareDesc, format, parseISO } from "date-fns";

import Hero from "src/components/hero";
import Image from "next/image";
import LinesEllipsisLoose from "react-lines-ellipsis/lib/loose";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date.createdAt), new Date(b.date.createdAt))
  );

  return (
    <>
      <Hero />
      <div className="page-wrapper blog">
        <div className="highlighted-post"></div>
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
      </div>
    </>
  );
};

export default Blog;
