import { useRouter } from "next/router";

import Link from "next/link";

export default function NavLink({
  children,
  href,
  className,
  activeClassName,
  restProps
}) {
  const router = useRouter();
  const stylesActive =
    router.asPath === href || router.asPath.includes(href)
      ? "after:content-[*] after:font-bold after:border-b-4 after:border-indigo-500"
      : "";
  const isActive = router.asPath === href || router.asPath.includes(href);
  return (
    <Link href={href}>
      <a className={`${className} ${stylesActive} ${isActive ? activeClassName : ''}`}>
        {children}
      </a>
    </Link>
  );
}
