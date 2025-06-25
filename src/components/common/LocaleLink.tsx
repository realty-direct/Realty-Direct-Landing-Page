'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { forwardRef } from 'react';

interface LocaleLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  ({ href, children, ...props }, ref) => {
    const locale = useLocale();
    
    // If href already includes locale or is external, use as-is
    if (href.startsWith('http') || href.startsWith(`/${locale}`)) {
      return (
        <Link ref={ref} href={href} {...props}>
          {children}
        </Link>
      );
    }
    
    // Otherwise, prepend locale
    const localizedHref = `/${locale}${href}`;
    
    return (
      <Link ref={ref} href={localizedHref} {...props}>
        {children}
      </Link>
    );
  }
);

LocaleLink.displayName = 'LocaleLink';

// Helper function to get locale-aware href
export const getLocalizedHref = (href: string, locale: string): string => {
  if (href.startsWith('http') || href.startsWith(`/${locale}`)) {
    return href;
  }
  return `/${locale}${href}`;
};