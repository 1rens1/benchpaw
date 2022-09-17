import { ChangeEventHandler, ReactNode, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { classes } from 'utils';
import styles from './Checkbox.module.scss';

const Checkbox = ({
    checked,
    onChange,
    disabled,
    label,
}: {
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    label?: ReactNode;
}) => {
    return (
        <div className={styles.root}>
            <label
                className={classes([
                    styles.inner,
                    disabled ? styles.disabled : null,
                ])}
            >
                <div className={styles.checkbox} data-checked={checked}>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    <BsCheckLg className={styles.check} />
                </div>
                {label && <div className={styles.label}>{label}</div>}
            </label>
        </div>
    );
};

export default Checkbox;
