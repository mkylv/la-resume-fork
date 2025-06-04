'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuGithub } from 'react-icons/lu';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSelectorDropdown from '../language-selector-dropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const hideHeader = pathname !== '/';
  const t = useTranslations();
  const { session } = useSessionContext();
  const supabase = useSupabaseClient();

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (hideHeader) return null;

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b p-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="La-Resume Logo" width={120} height={40} />
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {session ? (
            <>
              <Link href="/pricing" className="text-gray-700 hover:text-black">
                {t('header.pricing')}
              </Link>
              <Link href="/templates" className="text-gray-700 hover:text-black">
                {t('header.templates')}
              </Link>
              <Link href="/user-details" className="text-gray-700 hover:text-black">
                {t('header.userProfile')}
              </Link>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={signIn}>
                Sign In
              </Button>
            </div>
          )}
          <Link
            className="rounded-full border border-gray-300 p-2"
            href="https://github.com/shubhamku044/la-resume"
            target="_blank"
          >
            <LuGithub className="size-4" />
          </Link>
          <LanguageSelectorDropdown showLabel={false} />
        </nav>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiOutlineX className="size-6" /> : <HiOutlineMenu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute z-10 w-full bg-white md:hidden">
          <nav className="flex flex-col items-center gap-4 border-b py-4">
            {session ? (
              <>
                <Link
                  href="/templates"
                  className="text-gray-700 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.templates')}
                </Link>
                <Link
                  href="/user-details"
                  className="text-gray-700 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.userProfile')}
                </Link>
                <Button variant="outline" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={signIn}>
                Sign In
              </Button>
            )}
            <Link
              className="mt-2 rounded-full border border-gray-300 p-2"
              href="https://github.com/shubhamku044/la-resume"
              target="_blank"
            >
              <LuGithub className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
