import Image from "next/image";
import React from "react";

import classes from "./Background.module.css";

interface Props {
    forPage: string;
    children?: React.ReactNode;
}

const Background = ({ forPage, children }: Props): JSX.Element => {
    const styling =
        forPage === "Landing"
            ? `${classes.background_landing}`
            : `${classes.background_projects}`;

    return (
        <div className={`${classes.background} ${styling} ${classes.zoom}`}>
            <Image
                layout="fill"
                src="https://res.cloudinary.com/bjorntirsen/image/upload/v1657034220/portfolio-3/aaron-burden-unsplash_pjzscn.jpg"
                alt="Autumn forest road"
                objectFit="cover"
                objectPosition="center"
            />
            {children}
        </div>
    );
};

export default Background;
