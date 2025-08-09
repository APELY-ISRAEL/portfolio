'use client'

import { useTranslation } from 'react-i18next'
import { Select } from '@/components/ui/select'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(selectedLang)
    } else {
      console.error("i18n.changeLanguage is not a function")
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <select
        id="lang"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="border border-blue-600 px-3 py-2 rounded-md text-sm bg-slate-900"
      >
        <option value="en">Fr</option>
        <option value="fr">En</option>
      </select>
    </div>
  )
}
