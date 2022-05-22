import React, {MouseEventHandler} from "react";
import 'next'
import Link from 'next/link'
import cx from 'classnames'

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
}

export default function Button({children, onClick, href, variant = "secondary"}: ButtonProps) {
    return (
        <>
            <Link className={cx("button", variant === "primary" ? "primary" : "secondary")}
                  href={href || ""} onClick={onClick}>
                <a>{children}</a>
            </Link>
            <style jsx>{`
              .button {
                border-radius: 0.5em;
                border: 1px solid #eeeeee;
                background-color: white;
                padding: .85em 1em;
                transition: background-color ease-in-out 250ms, border-color ease-in-out 150ms, color ease-in-out 250ms;
                cursor: pointer;
                font-size: 0.9rem;
              }

              .primary {
                color: white;
                background-color: var(--primary);
                border-color: var(--primary);
              }

              .primary:hover {
                color: var(--primary);
                background-color: white;
              }

              .secondary {
                border-color: #eee;
                color: black;
                background-color: white;
              }

              .secondary:hover {
                border-color: black;
              }
            `}</style>
        </>
    )
}