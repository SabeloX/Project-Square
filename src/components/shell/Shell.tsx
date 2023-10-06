import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Shell.module.css"

export interface ShellProps {
    heading: string;
    children: ReactNode;
    className?: string;
}

export const Shell = ({ heading, children, className }: ShellProps) => {
    return (
        <div className={`container mt-6 ${styles.shell__container} is-flex is-flex-direction-column ${className}`}>
            <div className={`is-flex ${styles.shell__headingContainer}`}>
                <Image
                    src="/assets/icons/minus.svg"
                    width={40}
                    height={2}
                    alt="minus icon"
                />
                <p>{heading}</p>
            </div>
            { children }
        </div>
    )
}