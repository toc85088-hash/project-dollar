import type { AnchorHTMLAttributes } from 'react';

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

export function SiteLink({ href, ...props }: SiteLinkProps) {
  return <a href={href} {...props} />;
}
