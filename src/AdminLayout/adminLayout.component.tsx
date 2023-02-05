import React from 'react';
import {IAdminLayoutProps} from "@/AdminLayout/adminLayout.props";
import styles from "./adminLayout.module.scss"
import AdminMenuComponent from "@/AdminLayout/AdminMenu/adminMenu.component";

const AdminLayoutComponent = ({ children, className }: IAdminLayoutProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <AdminMenuComponent/>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};



export default AdminLayoutComponent;