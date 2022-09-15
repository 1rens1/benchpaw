import { useEffect, useState } from 'react';
import styles from 'styles/ReactionTime.module.scss';
import { classes } from 'utils';

const ReactionTime = () => {
    const [running, setRunning] = useState(false);
    const [canClick, setCanClick] = useState(false);
    const [whenGreen, setWhenGreen] = useState<number>();
    const [tooSoon, setTooSoon] = useState(false);

    const [canClickTimeout, setCanClickTimeout] = useState<any>();

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleClick = () => {
        if (!running) {
            const t = getRandomInt(2000, 5000);
            console.log(t);

            setRunning(true);
            setTooSoon(false);
            setCanClickTimeout(
                setTimeout(() => {
                    setCanClick(true);
                    setWhenGreen(Date.now());
                }, t)
            );
        } else {
            setRunning(false);
            setCanClick(false);
            if (canClick) {
                setRunning(false);
            } else {
                setTooSoon(true);
                clearTimeout(canClickTimeout);
            }
        }
    };
    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <button
                    className={classes([
                        styles.click,
                        canClick ? styles.active : null,
                    ])}
                    onMouseDown={handleClick}
                    tabIndex={-1}
                >
                    {running ? (
                        canClick ? (
                            <h1>Click!</h1>
                        ) : (
                            <h1>Wait for green</h1>
                        )
                    ) : tooSoon ? (
                        <>
                            <h1>Too soon!</h1>
                            <h3>Click to try again</h3>
                        </>
                    ) : !whenGreen ? (
                        <>
                            <h1>Reaction Time Test</h1>
                            <h3>
                                Click this button as fast as you can when it
                                turns green.
                            </h3>
                        </>
                    ) : (
                        <>
                            <h1>
                                {Date.now() - whenGreen}
                                ms
                            </h1>
                            <h3>Click to try again</h3>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ReactionTime;
