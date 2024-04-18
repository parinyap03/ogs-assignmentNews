import styles from "@uicourse/Button.module.css";

const Modulecss = () => {
  return (
    <>
    <h1>Workshop Module CSS</h1>
      <div className={styles.page}>
        <div className={styles.btn1}>CLICK ME</div>
        <div className={styles.btn2}>CLICK ME</div>
        <div className={styles.btn3}>CLICK ME</div>
        <div className={styles.btn4}>CLICK ME</div>
      </div>
    </>
  );
};

export default Modulecss;
