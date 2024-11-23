import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Blog() {
  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex gap-4 justify-between">
                  <CardTitle>Parch {i}.0 Released</CardTitle>
                  <CardDescription>2023-0{i}-01</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>Exciting new features and improvements in our latest release...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
