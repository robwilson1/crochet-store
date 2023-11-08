import type { PageProps } from "@/types"

export default function Page({ params }: PageProps) {
	return (
		<div>
			<h1 className="text-5xl">Product {params.slug}</h1>
		</div>
	)
}
