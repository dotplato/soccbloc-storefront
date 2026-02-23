import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type BlogPostPreview = {
  slug: string;
  title: string;
  date: string;
  imageSrc: string;
};

const blogPreviews: BlogPostPreview[] = [
  {
    slug: "must-have-accessories-for-subsoccer-fans",
    title: "Must-Have Accessories for Every SubSoccer Fan",
    date: "December 03 2025",
    imageSrc: "/images/blog-1.png",
  },
  {
    slug: "how-subsoccer-and-music-boost-your-game-mood",
    title: "How SubSoccer & Music Boost Your Game Mood",
    date: "December 03 2025",
    imageSrc: "/images/blog-2.png",
  },
  {
    slug: "subsoccers-and-earphones-care-guide",
    title: "SubSoccer & Earphones Care Guide: Keep Your Gear Fresh",
    date: "December 03 2025",
    imageSrc: "/images/blog-3.png",
  },
  {
    slug: "bluetooth-soundbars-for-subsoccer-myths-vs-reality",
    title: "Bluetooth Soundbars for SubSoccer: Myths vs Reality",
    date: "December 03 2025",
    imageSrc: "/images/blog-4.png",
  },
];


export function BlogTeaserSection() {
  const posts = blogPreviews.slice(0, 4);

  return (
    <section className="bg-neutral-800 text-white">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="space-y-2 pb-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/60">
            Subheading for this section
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.3rem]">
            Stories & art of sharing playful subsoccer
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-none border-none bg-transparent text-white"
            >
              <div className="relative aspect-[16/10] w-full bg-neutral-800">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <CardContent className="flex flex-1 flex-col max-w-10/12 justify-end bg-neutral-800 mt-[-50px] z-99 px-4 py-4 text-xs sm:px-5 sm:py-5">
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/60">
                  {post.date}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium leading-snug text-white transition-colors hover:text-white/80 sm:text-[1.4rem]"
                >
                  {post.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "rounded-full border-white/40 bg-transparent px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black",
            })}
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogTeaserSection;

