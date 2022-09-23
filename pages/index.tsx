import styles from 'styles/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    bench
                    <span className={styles.secondary}>paw</span>
                </h1>
                <h3 className={styles.subtitle}>games for your brains</h3>
            </div>
        </div>
    );
};

export default Home;
