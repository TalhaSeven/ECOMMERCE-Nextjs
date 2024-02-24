import React from "react";
import { useGetProductsQuery } from "@/services/product";

const Products = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
  } = useGetProductsQuery("product");
  console.log(products);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {isLoading ? <div className="text-black">Loading...</div> : ""}
            {isSuccess &&
              products.list.map((product: any) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={
                        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      }
                      alt={"Front of men's Basic Tee in black."}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`product/${product.seo}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900"><span className="line-through text-black/50">{product.price.price}</span> {product.price.discountPrice}</p> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
