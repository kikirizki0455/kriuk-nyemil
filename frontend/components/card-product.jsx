import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get("http://localhost:2000/products");
        console.log(res.data.product);
        setProducts(res.data.product);
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-2 p-5 md:p-8 justify-items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-full max-w-sm overflow-hidden rounded-lg transition-transform duration-300 hover:scale-102 hover:shadow-lg"
          >
            <div className="m-auto relative w-[80%] h-100 rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes={200}
                className="object-cover"
                priority
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-xl font-semibold">
                {product.name}
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-600">
                {product.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
