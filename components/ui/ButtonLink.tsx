import type { ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`button button--${variant} ${className}`.trim()}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}
