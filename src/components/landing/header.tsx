'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-provider';
import { FileText, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LanguageSelectorDropdown from '../language-selector-dropdown';

export function Header() {
  const router = useRouter();
  const { session } = useSessionContext();
  const supabase = useSupabaseClient();

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex items-center gap-2">
            <FileText className="size-6 text-primary" />
            <span className="text-xl font-bold">La Resume</span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a href="#team" className="text-sm font-medium transition-colors hover:text-primary">
            Our Team
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelectorDropdown showLabel={false} />

          {session ? (
            <>
              <Button
                onClick={() => {
                  router.push('/templates');
                }}
                size="sm"
                className="bg-purple-500 text-white hover:bg-purple-600"
              >
                Go to app
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="hidden bg-purple-500 text-white hover:bg-purple-600 md:flex"
              onClick={signIn}
            >
              Get Started
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <SheetTitle>Mobile Navigation</SheetTitle>
              <nav className="mt-6 flex flex-col gap-4">
                <a
                  href="#features"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  How It Works
                </a>
                <a
                  href="#team"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Our Team
                </a>
                <a
                  href="#testimonials"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Testimonials
                </a>
                <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
                  FAQ
                </a>

                {session ? (
                  <>
                    <Button
                      onClick={() => {
                        router.push('/templates');
                      }}
                      size="sm"
                      className="bg-purple-500 text-white hover:bg-purple-600"
                    >
                      Go to app
                    </Button>
                    <Button variant="outline" size="sm" onClick={signOut}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button
                    size="sm"
                    className="hidden bg-purple-500 text-white hover:bg-purple-600 md:flex"
                    onClick={signIn}
                  >
                    Get Started
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
