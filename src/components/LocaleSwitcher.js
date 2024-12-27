"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher({
  locale,
  code,
  style,
  additionalAction,
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const currentLang = pathname.split("/")[1];
    const newPath = `/${code}${pathname.replace(`/${currentLang}`, "")}`;
    router.push(newPath);
    if (additionalAction) additionalAction();
  };

  return (
    <button key={code} className={style} onClick={switchLanguage}>
      {locale}
    </button>
  );
}
