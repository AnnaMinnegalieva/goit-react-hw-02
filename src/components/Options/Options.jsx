import styles from './Options.module.css';


const Options = ({ onFeedbackClick, totalFeedback, onReset }) => {
    return (
      <div className={styles.options}>
        <button className={styles.button} onClick={() => onFeedbackClick('good')}>Good</button>
        <button className={styles.button} onClick={() => onFeedbackClick('neutral')}>Neutral</button>
        <button className={styles.button} onClick={() => onFeedbackClick('bad')}>Bad</button>
        {totalFeedback > 0 && <button className={styles.button} onClick={onReset}>Reset</button>}
      </div>
    );
  };

export default Options;
