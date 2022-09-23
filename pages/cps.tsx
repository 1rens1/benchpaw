import defStyles from 'styles/TestDefaults.module.scss';
import styles from 'styles/CPS.module.scss';

const cps = () => {
    return <div className={defStyles.center}>
        <div className={defStyles.container}>
            Work in Progress
        </div>
    </div>;
};

export default cps;
