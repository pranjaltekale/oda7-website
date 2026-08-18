'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Link({ to, href, children, ...props }) {
  return <NextLink href={to ?? href} {...props}>{children}</NextLink>;
}

export function useLocation() {
  return { pathname: usePathname() };
}

export function useNavigate() {
  const router = useRouter();
  return (destination, options = {}) => {
    if (typeof destination === 'number') {
      if (destination === -1) router.back();
      return;
    }
    if (options.replace) router.replace(destination);
    else router.push(destination);
  };
}
