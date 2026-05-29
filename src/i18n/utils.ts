import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Extract the active language from a URL pathname (/en/... or /zh/...). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/** Returns a translator that falls back to the default language, never blank. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Build a localized, root-relative path for the given language.
 * getLocalizedPath('/products', 'zh') -> '/zh/products'
 * getLocalizedPath('/', 'en') -> '/en/'
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

/** Swap the language prefix on the current pathname, preserving the rest. */
export function switchLangPath(pathname: string, lang: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && parts[0] in ui) {
    parts[0] = lang;
  } else {
    parts.unshift(lang);
  }
  const rest = parts.join('/');
  return `/${rest}${pathname.endsWith('/') && !rest.endsWith('/') ? '/' : ''}`;
}

/** getStaticPaths value that generates one route per supported language. */
export function langStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'zh' } }];
}

export { ui, defaultLang };
export type { Lang, UIKey };
