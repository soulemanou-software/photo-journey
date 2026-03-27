export default function GradientBanner() {
  return (
    <section className="container-site pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[840px] rounded-full px-6 py-16 text-center text-white shadow-[0_40px_80px_rgba(143,156,211,0.18)] 
        sm:rounded-full sm:px-8 sm:py-10 
        md:rounded-full md:px-12 md:py-14 
        lg:rounded-full lg:px-16 lg:py-16" 
        style={{ background: "linear-gradient(90deg,#8F9CD3 0%,#FFCAA4 100%)" }}>
        
        {/* Title - responsive sizing */}
        <h2 className="font-serif text-[20px] font-bold leading-[1.2] 
          sm:text-[24px] 
          md:text-[30px] 
          lg:text-[34px]">
          Before You Shoot: A Quick Morocco Photography Mindset
        </h2>
        
        {/* First paragraph - responsive text size and width */}
        <p className="mx-auto mt-4 max-w-[90%] text-[13px] leading-[1.7] text-white/92 
          sm:mt-5 sm:max-w-[85%] sm:text-[14px] 
          md:max-w-[968px] md:leading-[1.8]">
         Chase soft light, not just golden light. Morocco’s sun can be dramatic. That’s a gift, but it can also be unforgiving—especially around midday when shadows get sharp and highlights blow out fast. Your most flattering images usually come from:Early morning, when the medina wakes slowly and you can shoot clean streets before the crowdsLate afternoon to sunset, when warm tones add depth and faces look softe. Blue hour, <span className="font-semibold text-white rounded-md p-1"   style={{ background: "linear-gradient(90deg,#AD54F0 0%,#D24DBC 100%)" }} >when lanterns start glowing</span> and tiled courtyards look magical. Shaded alleys, where contrast becomes art and light falls in ribbons. If you only remember one thing, remember this: the best Morocco photos often happen in transitions—between day and night, between indoors and outdoors, between shadow and sunlight.
        </p>
        {/* CTA Button - responsive sizing */}
        <button type="button" className="mt-5 rounded-full bg-white px-4 py-2.5 text-[11px] font-semibold text-[#1A1A2E] shadow-[0_18px_40px_rgba(255,255,255,0.22)] 
          sm:mt-6 sm:px-5 sm:py-3 sm:text-[12px] 
          md:mt-7 md:px-6 md:py-3">
          Visit Photography Guide
        </button>
      </div>
    </section>
  );
}
