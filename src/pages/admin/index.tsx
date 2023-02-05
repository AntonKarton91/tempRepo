import styles from "@/styles/adminPage.module.scss"
import AdminLayoutComponent from "@/AdminLayout/adminLayout.component";


export default (): JSX.Element => {
    return (
        <AdminLayoutComponent>
            <div className={styles.container}>
                Добро пожаловать в административную панель Deka-shop
            </div>
        </AdminLayoutComponent>
    );
};

