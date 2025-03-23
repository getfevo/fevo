"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LimitsSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Plan Limits</CardTitle>
          <CardDescription>
            Overview of your current plan limitations and usage.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Projects</span>
                <span className="text-sm">3 of 5</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Team Members</span>
                <span className="text-sm">8 of 10</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Storage</span>
                <span className="text-sm">2.4 GB of 5 GB</span>
              </div>
              <Progress value={48} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">API Requests</span>
                <span className="text-sm">45K of 100K</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Upgrade Plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage History</CardTitle>
          <CardDescription>
            Review your resource usage over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-60 flex items-center justify-center border rounded-lg bg-muted/20">
            <p className="text-sm text-muted-foreground">Usage chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Request Additional Resources</CardTitle>
          <CardDescription>
            Need more resources? Contact our sales team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            If you need additional resources beyond your current plan limits, our team can help you
            with a custom plan tailored to your organization's needs.
          </p>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button variant="outline">Contact Sales</Button>
          <Button>View Pricing Plans</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 