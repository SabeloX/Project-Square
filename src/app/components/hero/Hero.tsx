import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={`${styles.hero__container} is-fullheight-with-navbar hero`}>
            <Image
                fill
                alt="background hero"
                src="/assets/hero.png"
                sizes="100vw"
                quality={100}
                loading="lazy"
                className={styles.hero__image}
            />
            <div className={`hero-body `}>
                <div className={`${styles.hero__content} is-flex is-flex-direction-column`}>
                    <p className={`${styles.hero__text} is-size-1 title`}>Live with Confidence</p>
                    <p className={`${styles.hero__text} subtitle`}>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                    <button className={`is-borderless is-rounded button ${styles.hero__button}`}>View Project</button>
                </div>
            </div>
        </section>
    )
}