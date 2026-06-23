import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Part {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const MOCK_PARTS: Part[] = [
  {
    id: '1',
    name: 'High-Performance Brake Pads',
    price: '$45.99',
    description: 'Ceramic composite brake pads for reduced noise and superior stopping power.',
    imageUrl: 'https://placehold.co/400x300?text=Brake+Pads',
  },
  {
    id: '2',
    name: 'Premium Oil Filter',
    price: '$12.50',
    description: 'Synthetic blend media for maximum filtration and engine protection.',
    imageUrl: 'https://placehold.co/400x300?text=Oil+Filter',
  },
  {
    id: '3',
    name: 'Iridium Spark Plugs',
    price: '$8.99',
    description: 'Long-lasting iridium tip for improved ignition and fuel efficiency.',
    imageUrl: 'https://placehold.co/400x300?text=Spark+Plugs',
  },
  {
    id: '4',
    name: 'Air Filter Element',
    price: '$19.99',
    description: 'High-flow pleated paper filter to keep your engine breathing clean.',
    imageUrl: 'https://placehold.co/400x300?text=Air+Filter',
  },
  {
    id: '5',
    name: 'Fuel Pump Assembly',
    price: '$120.00',
    description: 'Direct replacement fuel pump with integrated strainer and regulator.',
    imageUrl: 'https://placehold.co/400x300?text=Fuel+Pump',
  },
  {
    id: '6',
    name: 'Timing Belt Kit',
    price: '$85.00',
    description: 'Complete kit including belt and tensioner for precise engine timing.',
    imageUrl: 'https://placehold.co/400x300?text=Timing+Belt',
  },
];

export function PartsShowcase() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Parts Showcase
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Premium quality auto parts for every make and model.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_PARTS.map((part) => (
          <Card key={part.id} className="overflow-hidden flex flex-col">
            <div className="aspect-video w-full relative">
              <img
                src={part.imageUrl}
                alt={part.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{part.name}</CardTitle>
              <CardDescription>{part.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600">
                {part.description}
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
