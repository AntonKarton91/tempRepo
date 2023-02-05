// @ts-ignore
import {HeaderProps} from "@/Layout/Header/Header.props";


export const Header = ({ className, children }: HeaderProps): JSX.Element => {
    return (
        <div className={className}>
            { children }
        </div>
    );
};