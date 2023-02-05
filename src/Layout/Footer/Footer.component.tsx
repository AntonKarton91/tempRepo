import {IFooterProps} from "@/Layout/Footer/Footer.props";


export const Footer = ({ className, children }: IFooterProps): JSX.Element => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};