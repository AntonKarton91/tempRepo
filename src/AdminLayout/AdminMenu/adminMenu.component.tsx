import React from 'react';
import styles from "./adminMenu.module.scss"
import {IAdminMenuProps} from "@/AdminLayout/AdminMenu/adminMenu.props";
import {useRouter} from "next/router";

const AdminMenuComponent = ({ children, className }: IAdminMenuProps): JSX.Element => {
    const router = useRouter()
    const menuList = [
        {title: "Баннеры", route: "#"},
        {title: "Товары", route: "/admin/products"},
        {title: "Пользователи", route: "#"},
    ]

    return (
        <div className={styles.container}>
            {
                menuList.map(menuItem => {
                    return (
                        <div className={styles.menuitem} onClick={() => router.push(menuItem.route)}>
                            {menuItem.title}
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AdminMenuComponent;