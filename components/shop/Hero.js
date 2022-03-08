import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Premium merch for modern vampires</h1>
          <div className={styles.description}>
            <p>
              A collection of exclusive apparel and limited-run accessories
              designed for our community.
            </p>
          </div>
          <a href="#browse" className={styles.cta}>
            Browse Products
          </a>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/RiuWwkwmmfI"
              title="Video showing the manufacture of products from the Dracula collection"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
