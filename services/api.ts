// Mock API service for foods
interface Food {
  id: number;
  name: string;
  calories?: number;
  image?: string;
  description?: string;
}

interface FetchFoodsParams {
  query: string;
}

// Mock food data
const mockFoods: Food[] = [
  {
    id: 1,
    name: "Apple",
    calories: 95,
    description: "Fresh red apple, perfect for snacking",
  },
  {
    id: 2,
    name: "Banana",
    calories: 105,
    description: "Ripe yellow banana, rich in potassium",
  },
  {
    id: 3,
    name: "Grilled Chicken Breast",
    calories: 165,
    description: "Lean protein source, grilled to perfection",
  },
  {
    id: 4,
    name: "Greek Yogurt",
    calories: 100,
    description: "Creamy yogurt with probiotics",
  },
  {
    id: 5,
    name: "Quinoa Bowl",
    calories: 220,
    description: "Nutritious grain bowl with vegetables",
  },
];

export const fetchFoods = async ({ query }: FetchFoodsParams): Promise<Food[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Filter foods based on query if provided
  if (query.trim()) {
    return mockFoods.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.description?.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  return mockFoods;
};