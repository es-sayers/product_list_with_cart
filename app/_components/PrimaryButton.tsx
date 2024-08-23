import { ReactNode } from "react";

export default function PrimaryButton(props: { children: ReactNode, onClick?: Function }) {
    return (
        <button onClick={() => { props.onClick && props.onClick() }} className="bg-primary text-white w-full rounded-full px-8 py-3">{props.children}</button>
    );
}