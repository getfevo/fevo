"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useActiveOrganization, useListOrganizations } from '@/lib/authClient';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardRedirect() {
  const router = useRouter();
  const { data: organizationData } = useActiveOrganization();
  const { data: organizations } = useListOrganizations();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedSlug = localStorage.getItem("activeOrganizationSlug");
    
    if (storedSlug) {
      router.push(`/dashboard/${storedSlug}`);
    } else if (organizationData?.slug) {
      localStorage.setItem("activeOrganizationSlug", organizationData.slug);
      router.push(`/dashboard/${organizationData.slug}`);
    } else if (organizations && organizations.length > 0) {
      // If we have organizations but no active one, use the first available organization
      localStorage.setItem("activeOrganizationSlug", organizations[0].slug);
      router.push(`/dashboard/${organizations[0].slug}`);
    } else if (organizations) {
      // We know organizations is loaded but empty
      setLoading(false);
    }
  }, [organizationData, organizations, router]);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Fevo</h1>
        <p className="text-gray-600 mb-6">
          You don't have any projects yet. Create your first project to get started.
        </p>
        <Button 
          onClick={() => router.push('/dashboard/new-project')}
          className="flex items-center justify-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          Create Your First Project
        </Button>
      </div>
    </div>
  );
}
