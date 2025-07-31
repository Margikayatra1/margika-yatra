import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"

export default function TeaserSection() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Only runs on client
    const videoId = 'fUz3SSOGN2U';
    const baseUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '1',
      rel: '0',
      modestbranding: '1',
      loop: '1',
      playlist: videoId,
    });
    setVideoUrl(`${baseUrl}?${params.toString()}`);
  }, []);

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-2xl">
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-orange-600 mb-4">Watch Our Teaser</h3>
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-xl">
          {videoUrl && (
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="YouTube teaser"
              frameBorder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
