import Checkbox from 'components/Checkbox';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import styles from 'styles/ReactionTime.module.scss';
import { classes } from 'utils';

const GameState = [
    'Initial',
    'Waiting',
    'CanClick',
    'Result',
    'TooSoon',
] as const;

const ReactionTime = () => {
    const [gameState, setGameState] =
        useState<typeof GameState[number]>('Initial');

    const [waitingTimeout, setWaitingTimeout] = useState<NodeJS.Timeout>();
    const [waitingDelay, setWaitingDelay] = useState(0);
    const clearWaitingTimeout = () => clearTimeout(waitingTimeout);

    const [whenCanClick, setWhenCanClick] = useState(0);
    const [reactionTime, setReactionTime] = useState(0);

    const [showCheats, setShowCheats] = useState(false);
    const [cheats, setCheats] = useState({
        delayProgress: false,
    });

    const handleClick = () => {
        const runGame = () => {
            const getRandomDelay = () => {
                let min = 2000;
                let max = 5000;
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            setGameState('Waiting');

            const delay = getRandomDelay();
            setWaitingDelay(delay);
            setWaitingTimeout(
                setTimeout(() => {
                    setGameState('CanClick');
                    setWhenCanClick(Date.now());
                }, delay)
            );
        };

        switch (gameState) {
            case 'Initial':
            case 'Result':
            case 'TooSoon':
                runGame();
                break;
            case 'Waiting':
                setGameState('TooSoon');
                clearWaitingTimeout();
                break;
            case 'CanClick':
                setReactionTime(Date.now() - whenCanClick);
                setGameState('Result');
                break;
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => clearWaitingTimeout, []);

    return (
        <>
            <NextSeo title="Reaction Time Test" />
            <div className={styles.center}>
                <div className={styles.container}>
                    <button
                        className={classes([
                            styles.click,
                            gameState === 'CanClick' ? styles.active : null,
                        ])}
                        onMouseDown={(e) => e.button === 0 && handleClick()}
                        tabIndex={-1}
                    >
                        {gameState === 'Initial' && (
                            <>
                                <h1>Reaction Time Test</h1>
                                <h3>
                                    Click this button as fast as you can when it
                                    turns green.
                                </h3>
                            </>
                        )}
                        {gameState === 'Waiting' && <h1>Wait for green</h1>}
                        {gameState === 'CanClick' && <h1>Click!</h1>}
                        {(gameState === 'Result' ||
                            gameState === 'TooSoon') && (
                            <>
                                <h1>
                                    {gameState === 'Result'
                                        ? (reactionTime < 200 ? '⚡ ' : '') +
                                          reactionTime +
                                          'ms'
                                        : 'Too soon!'}
                                </h1>
                                <h3>Click to try again.</h3>
                            </>
                        )}

                        {cheats.delayProgress && gameState === 'Waiting' && (
                            <div className={classes([styles.waitBar])}>
                                <div
                                    className={styles.waitBarInner}
                                    style={{
                                        animationDuration: waitingDelay + 'ms',
                                    }}
                                />
                            </div>
                        )}
                    </button>
                </div>
                <div className={styles.container}>
                    <h4
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            cursor: 'default',
                        }}
                        onClick={() => setShowCheats((v) => !v)}
                    >
                        {showCheats ? <BsChevronDown /> : <BsChevronRight />}{' '}
                        Cheats
                    </h4>
                    {showCheats && (
                        <div style={{ marginTop: 8 }}>
                            <Checkbox
                                checked={cheats.delayProgress}
                                disabled={
                                    gameState === 'Waiting' ||
                                    gameState === 'CanClick'
                                }
                                onChange={({ currentTarget: t }) =>
                                    setCheats((c) => ({
                                        ...c,
                                        delayProgress: t.checked,
                                    }))
                                }
                                label="Show delay progress bar"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReactionTime;
