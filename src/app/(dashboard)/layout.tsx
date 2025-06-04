'use client';
import { DashboardLayout } from './_components';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { session } = useSessionContext();
  const router = useRouter();

  if (!session) {
    router.replace('/');
    return null;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
