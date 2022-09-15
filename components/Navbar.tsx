import { useState } from 'react';
import styles from 'styles/Navbar.module.scss';
import { classes } from 'utils';
import { BiChevronRight } from 'react-icons/bi';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((o) => !o);

    return (
        <>
            <button
                className={classes([
                    styles.toggleButton,
                    open ? styles.opened : null,
                ])}
                onClick={toggle}
            >
                <BiChevronRight className={styles.arrow} />
            </button>
        </>
    );
};

export default Navbar;
