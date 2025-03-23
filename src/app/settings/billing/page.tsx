"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>
                Manage your subscription plan.
              </CardDescription>
            </div>
            <Badge>Pro</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Start Date</p>
              <p className="text-sm text-muted-foreground">Jan 1, 2023</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Next Billing Date</p>
              <p className="text-sm text-muted-foreground">Jan 1, 2024</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Billing Cycle</p>
              <p className="text-sm text-muted-foreground">Annually</p>
            </div>
          </div>
          <div className="border p-4 rounded-lg bg-muted/50">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Features Usage</span>
              <span className="text-sm">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Change Plan</Button>
          <Button variant="destructive">Cancel Subscription</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Manage your payment details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-100 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/24</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Add Payment Method</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            View your recent invoices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="text-sm font-medium">Invoice #1234</p>
                <p className="text-xs text-muted-foreground">Jan 1, 2023</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">$99.00</p>
                <Button variant="ghost" size="sm">Download</Button>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="text-sm font-medium">Invoice #1233</p>
                <p className="text-xs text-muted-foreground">Dec 1, 2022</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">$99.00</p>
                <Button variant="ghost" size="sm">Download</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 