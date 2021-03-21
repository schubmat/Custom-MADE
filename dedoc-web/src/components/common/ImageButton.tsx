import * as React from "react";

export interface ImageProps {
    src: string;
    alt: string;
    onClick?: () => void;
    height?: string;
    width?: string;
    style?: any;
}

const ImageButton: React.FC<ImageProps> = (props: ImageProps) => {
    const height = props.height ? props.height : '20px';
    const width = props.width ? props.width : '20px';
    return <img style={{height: height, width: width, ...props.style}}
                alt={props.alt}
                src={props.src}
                onClick={props.onClick}/>
};

export default ImageButton;