import { VideoFeatureCard } from "@/components/ui/video-feature-card";

const videoFeatures = [
  {
    id: "powered-day",
    title: "Stay powered through your day.",
    videoSrc: "/videos/about-grid-1.mp4",
  },
  {
    id: "sweat-weather",
    title: "Built for sweat & weather.",
    videoSrc: "/videos/about-grid-2.mp4",
  },
  {
    id: "gesture-interface",
    title: "Smart gesture interface.",
    videoSrc: "/videos/about-grid-3.mp4",
  },
  {
    id: "acoustic-optimization",
    title: "Dynamic acoustic optimization.",
    videoSrc: "/videos/about-grid-4.mp4",
  },
];

export function VideoFeatureGridSection() {
  return (
    <section className="bg-neutral-800 text-white">
      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Left: single large feature */}
        
          <div className="h-full">
            
            <VideoFeatureCard
              title={videoFeatures[0].title}
              videoSrc={videoFeatures[0].videoSrc}
              className="h-full min-h-[260px] w-full text-2xl"
            />
          </div>

          {/* Right: three-tile stack (two top, one bottom) */}
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <VideoFeatureCard
                title={videoFeatures[1].title}
                videoSrc={videoFeatures[1].videoSrc}
                className="aspect-[16/9]"
              />
              <VideoFeatureCard
                title={videoFeatures[2].title}
                videoSrc={videoFeatures[2].videoSrc}
                className="aspect-[16/9]"
              />
            </div>
            <VideoFeatureCard
              title={videoFeatures[3].title}
              videoSrc={videoFeatures[3].videoSrc}
              className="aspect-[16/8]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoFeatureGridSection;

