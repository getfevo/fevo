"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Organization</CardTitle>
          <CardDescription>
            Manage your organization settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" placeholder="Enter organization name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-slug">Organization Slug</Label>
              <Input id="org-slug" placeholder="your-organization" />
              <p className="text-sm text-muted-foreground">
                This will be used in your URL: fevo.io/org/{"{slug}"}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Organization</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 