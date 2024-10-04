import { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h3>Welcome to TECH TaLKS !</h3>
        <p>
          At TECH TaLKS, we believe that every story deserves to be told. Our
          platform is dedicated to sharing insights, experiences, and knowledge
          on a wide range of topics that matter to our readers. Whether you're
          looking for the latest trends in technology, tips for a healthier
          lifestyle, or simply a good read to unwind, you’ll find it all here.
          Our Mission Our mission is to create a vibrant community where ideas
          can be shared freely. We aim to inspire, educate, and entertain
          through high-quality content that resonates with our diverse audience.
          Our team of passionate writers and contributors are committed to
          providing well-researched articles, engaging stories, and thoughtful
          commentary.
        </p>
        <h3>What We Offer</h3>
        <p>
          Diverse Topics: From travel and food to technology and personal
          development, our blog covers a variety of subjects to cater to every
          interest. Expert Contributors: Our articles are written by
          knowledgeable authors and experts in their respective fields, ensuring
          that you receive accurate and valuable information.
        </p>
        <p>
          Community Engagement: We encourage our readers to participate in
          discussions, share their thoughts, and connect with others who share
          similar interests.
        </p>
        <h3>Join Us</h3>
        <p>
          We invite you to explore our blog, share your thoughts, and become a
          part of our community. Whether you are a casual reader or a passionate
          writer, there's a place for you at [Your Blog Name]. Let's embark on
          this journey of discovery and growth together!
        </p>
        <p>Thank you for visiting!</p>
      </div>
    </article>
  );
};

export default About;
