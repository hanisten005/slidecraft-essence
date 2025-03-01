
import TikTokSlideshow from "../components/TikTokSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1F2C] p-4">
      <div className="max-w-md mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-white">TikTok Slideshow</h1>
        <p className="text-gray-400">
          Professional slideshow optimized for TikTok's vertical format (9:16)
        </p>
      </div>
      
      <div className="tiktok-container">
        <TikTokSlideshow />
      </div>
      
      <div className="mt-8 text-sm text-gray-400 text-center max-w-md">
        <p>
          This slideshow is designed for TikTok's 9:16 vertical format and includes clean, minimalist slides.
          The last slide features a round logo placeholder for your brand.
        </p>
      </div>
    </div>
  );
};

export default Index;
