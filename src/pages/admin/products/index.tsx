import React from 'react';
import styles from "@/styles/adminPage.module.scss"
import {useRouter} from "next/router";
import AdminLayoutComponent from "@/AdminLayout/adminLayout.component";


const Index = () => {
    const router = useRouter()

    const categoriesList = [
        {title: "Кухни", route: "/kitchen"},
        {title: "Ванные", route: "/bathroom"},
        {title: "Спальни", route: "/bedroom"},
    ]

    return (
        <AdminLayoutComponent>
            <div>
                {
                    categoriesList.map(item => {
                        return (
                            <div
                                onClick={() => router.push("/admin/products" + item.route)}
                                className={styles.menuitem}
                            >
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        </AdminLayoutComponent>
    );
};

export default Index;