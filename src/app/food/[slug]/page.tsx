"use client"
import { client } from "@/sanity/lib/client";
import { Foods } from "../../../../types/food";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Button from "@/app/components/Button";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import FoodGrid from "@/app/components/foodGrid";
import Link from "next/link";





interface FoodPageProps {
        params : Promise<{slug : string}>;
}

async function getFood(slug: string): Promise<Foods> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      image
    }`,
    { slug }
  );
}

export default async function Detailpage({ params }: FoodPageProps) {
  const { slug } = await params;
  const food = await getFood(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          {food.image && (
            <Image
              src={urlFor(food.image).url()}
              alt={food.name}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          )}
        </div>
         {/* Availabilty */}
           <div className="space-y-6">
           <Button size="md" className="bg-orange-500 text-white hover:bg-orange-600 rounded-md" >
                  In stock
                </Button>
                {/* Food name */}
                <h1 className="text-4xl font-bold">{food.name}</h1>
                {/* Food description */}
                <p className="text-gray-400">
                {food.description}
                </p>
                {/* Food price */}
                <div className="text-3xl font-bold">${food.price}</div>
                {/* Food ratings */}
                <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <div className="text-gray-400">
              <span className="font-bold">5.0</span> Rating | <span>22</span> Review
            </div>
          </div>
          {/* Add to cart button */}
         <Link href='/ShopingCart'> <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 w-full md:w-auto">Add to cart</Button></Link>
          <div className="border-t pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-gray-400">
                Category: <span className="text-white">{food.category}</span>
              </div>
              
            </div>
          </div>
              
            </div>
      </div>
      <FoodGrid />
    </div>
  );
}

