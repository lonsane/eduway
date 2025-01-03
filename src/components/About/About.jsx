import React from "react";

import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Information About Us</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum esse veritatis doloribus quibusdam ipsam exercitationem quia, unde nulla magni sapiente id ut necessitatibus ipsa tenetur sequi numquam suscipit mollitia! Ipsa dolorum dicta sed harum dolore cum nesciunt quis veniam nihil aperiam quae quasi, deleniti aliquam quidem adipisci nemo non?a
              </p>
            </div>
          </li>
          
          
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};