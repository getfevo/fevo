import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"

interface Feature {
  id: string;
  votes: number;
  title: string;
  description: string;
  category: string;
}

export function FeatureRequestCard({ feature }: { feature: Feature }) {
    return (
      <Card key={feature.id} className="bg-white mb-4">
        <CardContent>
          <div className="flex items-center">
            <div className="mr-4 flex flex-col items-center">
              <Button variant="outline" size="sm">▲</Button>
              <span className="text-sm mt-1">{feature.votes}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
            <Badge variant="outline">{feature.category}</Badge>
          </div>
        </CardContent>
      </Card>
    );
  }
  