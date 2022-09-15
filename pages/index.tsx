import styles from 'styles/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    bench
                    <div className={styles.secondary}>paw</div>
                </h1>
                <h3 className={styles.subtitle}>games for your brains</h3>
            </div>
        </div>
    );
};

export default Home;
