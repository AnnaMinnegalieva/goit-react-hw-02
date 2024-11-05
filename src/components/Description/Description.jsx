import styles from './Description.module.css';

const Description = () => {
  return (
    <div>
        <h2 className={styles.title}>Sip Happens Café</h2>
        <p className={styles.item}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  )
};

export default Description;
