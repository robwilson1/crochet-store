import type { Products } from "@/types"
import Image from "next/image"

async function getData<T>() {
	const res = await fetch("https://dummyjson.com/products")
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch products")
	}

	// You can return Date, Map, Set, etc.
	return res.json() as T
}

export default async function Page() {
	const { products } = await getData<Products>()

	return (
		<div>
			<h1 className="text-5xl">All Products</h1>

			<section className="m-5 flex flex-col">
				{products.map((product) => {
					return (
						<article key={product.id} className="m-5">
							<Image
								src={product.thumbnail}
								alt={`Thumbnail image of ${product.title}`}
								width={500}
								height={300}
							/>
							<h3>{product.title}</h3>
							<p>{product.description}</p>
							<p>{product.price}</p>
						</article>
					)
				})}
			</section>
		</div>
	)
}
