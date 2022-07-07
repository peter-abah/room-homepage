import styles from './about.module.css';

interface Props {
  data: {
    heading: string;
    body: string;
    imgDark: string;
    imgLight: string;
    altDark: string;
    altLight: string;
  }
};

function About({ data }: Props) {
  return (
    <section className={styles.about}>
      <img
        src={data.imgDark}
        height={266}
        width={375}
        alt={data.altDark}
      />

      <div>
        <h3>{data.heading}</h3>
        <p>{data.body}</p>
      </div>

      <img
        src={data.imgLight}
        height={266}
        width={375}
        alt={data.altLight}
      />
    </section>
  )
}

export default About;