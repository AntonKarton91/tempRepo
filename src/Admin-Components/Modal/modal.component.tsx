import React from 'react';
import cn from "classnames";
import styles from "./modal.module.scss"
import CloseIcon from "public/close.svg"

const ModalComponent = ({children, closeHandler}) => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.modal)}>
                <div className={styles.container}>
                    <div onClick={closeHandler} className={styles.close}><CloseIcon/></div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;