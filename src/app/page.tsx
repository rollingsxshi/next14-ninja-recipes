import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string,
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')
  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(r => (
          <Card key={r.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{ r.title }</CardTitle>
                <CardDescription>{ r.time } mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{ r.description }</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              {r.vegan && <p>Vegan!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
