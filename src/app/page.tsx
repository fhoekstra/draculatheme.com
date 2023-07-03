import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
    </>
  );
};

export default Home;
