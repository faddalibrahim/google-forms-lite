import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FormsList() {
  const recipes = [
    {
      id: "1",
      title: "Veggie Carbonara",
      image: "veggie_carbonara.jpg",
      time: 20,
      description:
        "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
      vegan: false,
    },
    {
      id: "2",
      title: "Veg Stir-Fry",
      image: "veg_stir_fry.jpg",
      time: 25,
      description:
        "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
      vegan: true,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 p-5">
      {recipes.map((recipe) => (
        <Card key={recipe.id} className="flex flex-col justify-between">
          <CardHeader className="flex-row gap-4 items-center">
            <Avatar>
              <AvatarImage src={`/img/${recipe.image}`} alt="@shadcn" />
              <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.time} mins to cook.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>{recipe.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>View Recipe</Button>
            {/* {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>} */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
