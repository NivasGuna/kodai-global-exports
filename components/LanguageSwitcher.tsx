'use client';

import React, { useEffect, useState } from 'react';
import { Settings, Check, Globe } from 'lucide-react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@/components/ui/menubar';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'Tamil' },
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'am', name: 'Amharic' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hy', name: 'Armenian' },
  { code: 'as', name: 'Assamese' },
  { code: 'ay', name: 'Aymara' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'bm', name: 'Bambara' },
  { code: 'eu', name: 'Basque' },
  { code: 'be', name: 'Belarusian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bho', name: 'Bhojpuri' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'ca', name: 'Catalan' },
  { code: 'ceb', name: 'Cebuano' },
  { code: 'ny', name: 'Chichewa' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'co', name: 'Corsican' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'dv', name: 'Dhivehi' },
  { code: 'doi', name: 'Dogri' },
  { code: 'nl', name: 'Dutch' },
  { code: 'eo', name: 'Esperanto' },
  { code: 'et', name: 'Estonian' },
  { code: 'ee', name: 'Ewe' },
  { code: 'tl', name: 'Filipino' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'fy', name: 'Frisian' },
  { code: 'gl', name: 'Galician' },
  { code: 'ka', name: 'Georgian' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gn', name: 'Guarani' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'ha', name: 'Hausa' },
  { code: 'haw', name: 'Hawaiian' },
  { code: 'iw', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hmn', name: 'Hmong' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'ig', name: 'Igbo' },
  { code: 'ilo', name: 'Ilocano' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ga', name: 'Irish' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'jw', name: 'Javanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'km', name: 'Khmer' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'gom', name: 'Konkani' },
  { code: 'ko', name: 'Korean' },
  { code: 'kri', name: 'Krio' },
  { code: 'ku', name: 'Kurdish (Kurmanji)' },
  { code: 'ckb', name: 'Kurdish (Sorani)' },
  { code: 'ky', name: 'Kyrgyz' },
  { code: 'lo', name: 'Lao' },
  { code: 'la', name: 'Latin' },
  { code: 'lv', name: 'Latvian' },
  { code: 'ln', name: 'Lingala' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lg', name: 'Luganda' },
  { code: 'lb', name: 'Luxembourgish' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'mai', name: 'Maithili' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'ms', name: 'Malay' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mt', name: 'Maltese' },
  { code: 'mi', name: 'Maori' },
  { code: 'mr', name: 'Marathi' },
  { code: 'mni-Mtei', name: 'Meiteilon (Manipuri)' },
  { code: 'lus', name: 'Mizo' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'my', name: 'Myanmar (Burmese)' },
  { code: 'ne', name: 'Nepali' },
  { code: 'no', name: 'Norwegian' },
  { code: 'or', name: 'Odia (Oriya)' },
  { code: 'om', name: 'Oromo' },
  { code: 'ps', name: 'Pashto' },
  { code: 'fa', name: 'Persian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'qu', name: 'Quechua' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sm', name: 'Samoan' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'gd', name: 'Scots Gaelic' },
  { code: 'nso', name: 'Sepedi' },
  { code: 'sr', name: 'Serbian' },
  { code: 'st', name: 'Sesotho' },
  { code: 'sn', name: 'Shona' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'so', name: 'Somali' },
  { code: 'es', name: 'Spanish' },
  { code: 'su', name: 'Sundanese' },
  { code: 'sw', name: 'Swahili' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tg', name: 'Tajik' },
  { code: 'tt', name: 'Tatar' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'ti', name: 'Tigrinya' },
  { code: 'ts', name: 'Tsonga' },
  { code: 'tr', name: 'Turkish' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'ak', name: 'Twi' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ug', name: 'Uyghur' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'cy', name: 'Welsh' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'yo', name: 'Yoruba' },
  { code: 'zu', name: 'Zulu' },
];

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Try to find the current language from the cookie
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('googtrans='))
      ?.split('=')[1];
    
    if (cookieValue) {
      const lang = cookieValue.split('/').pop();
      if (lang && languages.some(l => l.code === lang)) {
        setCurrentLanguage(lang);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    // Set the cookie for Google Translate
    const cookieDomain = window.location.hostname === 'localhost' ? '' : `domain=.${window.location.hostname.split('.').slice(-2).join('.')};`;
    document.cookie = `googtrans=/en/${langCode}; path=/; ${cookieDomain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    
    setCurrentLanguage(langCode);
    window.location.reload();
  };

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Menubar className="h-auto rounded-full border-0 bg-transparent p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="group relative rounded-full px-3 py-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white outline-none cursor-pointer">
          <Settings size={20} className="transition-transform duration-500 group-hover:rotate-90" />
        </MenubarTrigger>
        <MenubarContent
          align="end"
          sideOffset={8}
          className="w-56 rounded-2xl border border-white/[0.08] bg-[#0f1623]/98 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur-xl"
        >
          <div className="px-3 py-2 flex flex-col gap-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              Select Language
            </div>
            <input
              type="text"
              placeholder="Search language..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onSelect={(e) => e.stopPropagation()}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-kodai-green/50 transition-colors"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <MenubarSeparator className="mx-2 bg-white/[0.07] mb-1" />
          <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <MenubarItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="flex items-center justify-between cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-white/65 outline-none hover:text-white focus:bg-white/8 focus:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={14} className={currentLanguage === lang.code ? 'text-kodai-green' : 'text-white/40'} />
                    <span>{lang.name}</span>
                  </div>
                  {currentLanguage === lang.code && (
                    <Check size={14} className="text-kodai-green" />
                  )}
                </MenubarItem>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-white/40 text-center">
                No languages found
              </div>
            )}
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
