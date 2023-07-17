"use client";

import "./index.scss";

import { fadeIn, fadeInUp, stagger } from "src/lib/framerMotion";
import { getBasePath, isProd } from "src/lib/environment";
import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import paths from "src/lib/paths";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";

const fetchApps = async (pageParam: number) => {
  if (isProd()) {
    for (const path of paths) {
      const viewsReq = await fetch(
        `${getBasePath()}/api/views/${path.params.theme}`
      );
      const viewsRes = await viewsReq.json();

      path.params.views = parseInt(viewsRes.views);
    }

    paths.sort(function (a, b) {
      return b.params.views - a.params.views;
    });
  }

  return paths.slice((pageParam - 1) * 3, pageParam * 3);
};

const AppsList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["apps-query"],
    async ({ pageParam = 1 }) => {
      const response = await fetchApps(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [paths.slice(0, 3)],
        pageParams: [1],
      },
    }
  );

  const lastAppRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastAppRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry]);

  const _apps = data?.pages.flatMap((page) => page);

  return (
    <div className="apps-wrapper">
      <motion.ul className="apps-list" variants={stagger}>
        {_apps?.map((app, index) => {
          if (index === _apps.length - 1)
            return (
              <motion.li
                key={index}
                ref={ref}
                variants={fadeIn}
                className="app"
              >
                <Link href={`/${app.params.title}`}>
                  <div className="icon">
                    <Image
                      src={app.params.icon}
                      width={80}
                      height={80}
                      alt={app.params.title}
                    />
                  </div>
                  <div className="content">
                    <span className="title">{app.params.title}</span>
                    <span className="views">
                      {app.params.views ? app.params.views : "0 views"}
                    </span>
                  </div>
                </Link>
              </motion.li>
            );

          return (
            <motion.li key={index} variants={fadeIn} className="app">
              <Link href={`/${app.params.title}`}>
                <div className="icon">
                  <Image
                    src={app.params.icon}
                    width={80}
                    height={80}
                    alt={app.params.title}
                  />
                </div>
                <div className="content">
                  <span className="title">{app.params.title}</span>
                  <span className="views">
                    {app.params.views ? app.params.views : "0 views"}
                  </span>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="load-more"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : data?.pageParams.length === _apps.length / 3
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default AppsList;
