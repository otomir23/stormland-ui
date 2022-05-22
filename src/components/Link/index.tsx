import React from "react";
import NextLink from 'next/link'

export default function Link({children, href}: { children: React.ReactNode, href: string }) {
    return (
        <NextLink href={href}>
            <a className='link'>
                {children}
            </a>
            <style jsx>{`
              .link {
                color: var(--primary);
                text-decoration: rgba(255, 255, 255, 0) underline;
                transition: text-decoration-color 150ms ease-in-out;
              }

              .link:hover {
                text-decoration-color: var(--primary);
              }
            `}</style>
        </NextLink>
    )
}