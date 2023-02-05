import {FunctionComponent} from "react";
import {LayoutProps} from "@/Layout/Layout.props";
import {Header} from "@/Layout/Header/Header.component";
import {Footer} from "@/Layout/Footer/Footer.component";
import styles from "./layout.module.scss"
import cn from "classnames";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <Header className={styles.header}>
                Header
            </Header>
            <main className={styles.content}>
                {children}
            </main>
            <Footer className={styles.footer}>
                Footer
            </Footer>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
                <Layout>
                    <Component {...props} />
                </Layout>
        );
    };
};