'use client';

import { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useLanguageStore } from '@/store/languageStore';

const LanguageUrlHandlerContent = () => {
  const { i18n } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    const langFromUrl = searchParams.get('lang');
    const validLang =
      langFromUrl && ['fr', 'en'].includes(langFromUrl) ? langFromUrl : 'fr';

    if (!langFromUrl) {
      const defaultLang = language || 'fr';
      const params = new URLSearchParams(searchParams.toString());
      params.set('lang', defaultLang);
      router.replace(`${pathname}?${params.toString()}`);
      return;
    }

    if (validLang !== language) {
      setLanguage(validLang);
    }

    if (validLang !== i18n.language) {
      i18n.changeLanguage(validLang);
    }
  }, [searchParams, router, pathname, language, i18n, setLanguage]);

  return null;
};

const LanguageUrlHandler = () => (
  <Suspense fallback={null}>
    <LanguageUrlHandlerContent />
  </Suspense>
);

export default LanguageUrlHandler;
