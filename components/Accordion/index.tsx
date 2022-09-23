import { useRef, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { classes } from 'utils';
import styles from './Accordion.module.scss';

const Accordion = ({
    label,
    initialOpen = false,
    transitionDuration,
    children,
}: {
    label: React.ReactNode;
    initialOpen?: boolean;
    transitionDuration?: string;
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(Boolean(initialOpen));
    const [contentHeight, setContentHeight] = useState<number | undefined>();
    const contentRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (!contentRef) return;

        if (!open) {
            setOpen(true);
            setContentHeight(contentRef.current?.scrollHeight);
        } else {
            setOpen(false);
            setContentHeight(undefined);
        }
    };

    return (
        <div className={classes([styles.accordion, open ? styles.open : null])}>
            <button className={styles.label} onClick={handleClick}>
                <BsChevronRight
                    className={styles.chevron}
                    style={{ transitionDuration }}
                />{' '}
                {label}
            </button>
            <div
                className={styles.content}
                ref={contentRef}
                style={{ maxHeight: contentHeight, transitionDuration }}
            >
                <div style={{ height: 8 }} />
                {children}
            </div>
        </div>
    );
};

export default Accordion;
