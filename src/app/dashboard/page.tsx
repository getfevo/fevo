"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useActiveOrganization } from '@/lib/authClient';

export default function DashboardRedirect() {
  const router = useRouter();
  const { data: organizationData } = useActiveOrganization();
  
  useEffect(() => {
    const storedSlug = localStorage.getItem("activeOrganizationSlug");
    if (storedSlug) {
      router.push(`/dashboard/${storedSlug}`);
    } else if (organizationData?.slug) {
      localStorage.setItem("activeOrganizationSlug", organizationData.slug);
      router.push(`/dashboard/${organizationData.slug}`);
    }
  }, [organizationData, router]);

  return <div>Loading dashboard...</div>;
}
