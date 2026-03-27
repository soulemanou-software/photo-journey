import Image from "next/image";

export default function TestImages() {
  const images = [
    { src: "/images/2.jpg", alt: "Image 2" },
    { src: "/images/3.png", alt: "Image 3" },
    { src: "/images/3pp.png", alt: "Avatar" },
    { src: "/images/adventure.png", alt: "Adventure" },
    { src: "/images/solo.png", alt: "Solo" },
    { src: "/images/icons8_elephant 1.png", alt: "Elephant" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.src} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{img.alt}</h2>
            <div className="relative w-full h-48 bg-gray-200 rounded">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                onError={(e) => {
                  console.error(`Failed to load image: ${img.src}`);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: ${img.src}`);
                }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{img.src}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
