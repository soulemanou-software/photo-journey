import Image from "next/image";

export default function TestHero() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Hero Images Test</h1>
      
      <div className="space-y-8">
        {/* Test main image */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Main Image (2.jpg)</h2>
          <div className="relative w-96 h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/2.jpg"
              alt="Main test image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Test secondary image */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Secondary Image (3.png)</h2>
          <div className="relative w-96 h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/3.png"
              alt="Secondary test image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Test with complex positioning like in hero */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Complex Positioning Test</h2>
          <div className="relative mx-auto h-[460px] w-[460px]">
            <div className="absolute left-[18rem] top-[3rem] rotate-[-105deg] z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-lg">
              <Image
                src="/images/2.jpg"
                alt="Complex positioning test"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 -right-10 z-10 h-[45%] w-[45%] rotate-[-12deg] overflow-hidden rounded-full shadow-lg">
              <Image
                src="/images/3.png"
                alt="Complex positioning test 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
