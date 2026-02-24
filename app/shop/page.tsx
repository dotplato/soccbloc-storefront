import Link from "next/link";
import { ShopHeader } from "@/components/shop/shop-header";
import { ShopFilters } from "@/components/shop/shop-filters";
import { ShopPagination } from "@/components/shop/shop-pagination";
import { ProductCard } from "@/components/ui/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SHOP_PRODUCTS = [
  {
    id: "1",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "AURUM ACOUSTICS",
    eyebrow: "AURUM ACOUSTICS",
    title: "Subsoccer S7 – Anthracite",
    price: "$199.00",
    compareAtPrice: "$249.00",
    shopUrl: "#",
  },
  {
    id: "2",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "VERTEX SOUNDWORKS",
    eyebrow: "VERTEX SOUNDWORKS",
    title: "Subsoccer S3 – Blue",
    price: "$349.00",
    compareAtPrice: "$399.00",
    shopUrl: "#",
  },
  {
    id: "3",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "HORIZON AUDIO LABS",
    eyebrow: "HORIZON AUDIO LABS",
    title: "Subsoccer S7 – White",
    price: "$429.00",
    shopUrl: "#",
  },
  {
    id: "4",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "NORTHPEAK ENGINEERING",
    eyebrow: "NORTHPEAK ENGINEERING",
    title: "Subsoccer S3 – Beige",
    price: "$299.00",
    shopUrl: "#",
  },
  {
    id: "5",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 5",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S7 – Gray",
    price: "$199.00",
    shopUrl: "#",
  },
  {
    id: "6",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 6",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S3 – Gold",
    price: "$349.00",
    shopUrl: "#",
  },
  {
    id: "7",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 7",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S7 – Brown",
    price: "$429.00",
    shopUrl: "#",
  },
  {
    id: "8",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 8",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S3 – Anthracite",
    price: "$299.00",
    shopUrl: "#",
  },
  {
    id: "9",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 9",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S7 – Beige",
    price: "$199.00",
    shopUrl: "#",
  },
  {
    id: "10",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 10",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S3 – Gray",
    price: "$349.00",
    shopUrl: "#",
  },
  {
    id: "11",
    imageSrc: "/images/subsoccer-product-1.png",
    imageAlt: "Product 11",
    eyebrow: "SOCC BLOC",
    title: "Subsoccer S7 – Blue",
    price: "$429.00",
    shopUrl: "#",
  },
];

const PRODUCTS_PER_PAGE = 11;
const TOTAL_PRODUCTS = 16;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const totalPages = Math.ceil(TOTAL_PRODUCTS / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = Math.min(start + PRODUCTS_PER_PAGE, SHOP_PRODUCTS.length);
  const products = SHOP_PRODUCTS.slice(0, end);
  const rangeText = `${start + 1}-${end} of ${TOTAL_PRODUCTS} products`;

  return (
    <main className="min-h-screen bg-neutral-800 text-white">
      <ShopHeader />

      {/* All Products banner */}
      <section className="border-b border-white/10 px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            All Products
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Our product range is built around sensory experience, acoustics,
            materials, and ergonomics. Each piece is designed to deliver
            exceptional sound quality while maintaining comfort for extended use.
          </p>
          <Link
            href="#"
            className="mt-4 inline-block text-sm font-medium text-lime-400 underline underline-offset-4 hover:text-lime-300"
          >
            READ MORE
          </Link>
        </div>
      </section>

      {/* Main content: filters + products */}
      <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="flex gap-10">
          <ShopFilters />

          <div className="min-w-0 flex-1">
            {/* Sort and count bar */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Sort by</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="h-9 min-w-[140px] border-white/20 bg-transparent text-sm text-white">
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 text-white border-white/10">
                    <SelectItem value="featured" className="text-white focus:bg-white/10">
                      Featured
                    </SelectItem>
                    <SelectItem value="price-asc" className="text-white focus:bg-white/10">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-desc" className="text-white focus:bg-white/10">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest" className="text-white focus:bg-white/10">
                      Newest
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-white/60">{rangeText}</span>
            </div>

            {/* Product grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <ShopPagination
              currentPage={page}
              totalPages={totalPages}
              basePath="/shop"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
