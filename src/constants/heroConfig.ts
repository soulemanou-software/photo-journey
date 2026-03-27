// Hero section background shape configuration
// Easy to manipulate positioning and rotation values

export const HERO_SHAPE_CONFIG = {
  // Background shape positioning (top, right, rotation)
  backgroundShape: {
    mobile: {
      top: '-20rem',
      right: '-8rem', 
      rotation: '-15deg'
    },
    tablet: {
      top: '-22rem',
      right: '-10rem',
      rotation: '-18deg'
    },
    desktop: {
      top: '-25rem',
      right: '-12rem',
      rotation: '-22deg'
    },
    large: {
      top: '-28rem',
      right: '-14rem',
      rotation: '-25deg'
    }
  },
  
  // Main image positioning (left, top, rotation)
  mainImage: {
    mobile: {
      left: '14rem',
      top: '2rem',
      rotation: '-95deg'
    },
    tablet: {
      left: '16rem',
      top: '2.5rem',
      rotation: '-100deg'
    },
    desktop: {
      left: '18rem',
      top: '3rem',
      rotation: '-105deg'
    },
    large: {
      left: '20rem',
      top: '3.5rem',
      rotation: '-110deg'
    }
  },
  
  // Secondary image positioning (bottom, right, rotation)
  secondaryImage: {
    mobile: {
      bottom: '3',
      right: '-6',
      rotation: '-8deg'
    },
    tablet: {
      bottom: '4',
      right: '-8',
      rotation: '-10deg'
    },
    desktop: {
      bottom: '5',
      right: '-10',
      rotation: '-12deg'
    },
    large: {
      bottom: '6',
      right: '-12',
      rotation: '-14deg'
    }
  }
} as const;

// Helper function to generate Tailwind classes from config
export function getHeroShapeClasses() {
  const { backgroundShape, mainImage, secondaryImage } = HERO_SHAPE_CONFIG;
  
  return {
    backgroundShape: `
      absolute inset-0 h-[60rem] w-[40rem] rounded-[15rem] bg-[#F0F1FA]
      -top-[${backgroundShape.mobile.top}] -right-[${backgroundShape.mobile.right}] -rotate-[${backgroundShape.mobile.rotation}]
      sm:-top-[${backgroundShape.tablet.top}] sm:-right-[${backgroundShape.tablet.right}] sm:-rotate-[${backgroundShape.tablet.rotation}]
      lg:-top-[${backgroundShape.desktop.top}] lg:-right-[${backgroundShape.desktop.right}] lg:-rotate-[${backgroundShape.desktop.rotation}]
      xl:-top-[${backgroundShape.large.top}] xl:-right-[${backgroundShape.large.right}] xl:-rotate-[${backgroundShape.large.rotation}]
    `,
    
    mainImage: `
      absolute z-10 h-[70%] w-[70%] overflow-hidden rounded-full shadow-[0_24px_60px_rgba(38,67,104,0.18)]
      left-[${mainImage.mobile.left}] top-[${mainImage.mobile.top}] rotate-[${mainImage.mobile.rotation}] -translate-x-1/2 -translate-y-1/2
      sm:left-[${mainImage.tablet.left}] sm:top-[${mainImage.tablet.top}] sm:rotate-[${mainImage.tablet.rotation}]
      lg:left-[${mainImage.desktop.left}] lg:top-[${mainImage.desktop.top}] lg:rotate-[${mainImage.desktop.rotation}]
      xl:left-[${mainImage.large.left}] xl:top-[${mainImage.large.top}] xl:rotate-[${mainImage.large.rotation}]
    `,
    
    secondaryImage: `
      absolute z-10 h-[45%] w-[45%] overflow-hidden rounded-full shadow-[0_16px_40px_rgba(26,26,46,0.16)]
      bottom-[${secondaryImage.mobile.bottom}] -right-[${secondaryImage.mobile.right}] rotate-[${secondaryImage.mobile.rotation}]
      sm:bottom-[${secondaryImage.tablet.bottom}] sm:-right-[${secondaryImage.tablet.right}] sm:rotate-[${secondaryImage.tablet.rotation}]
      lg:bottom-[${secondaryImage.desktop.bottom}] lg:-right-[${secondaryImage.desktop.right}] lg:rotate-[${secondaryImage.desktop.rotation}]
      xl:bottom-[${secondaryImage.large.bottom}] xl:-right-[${secondaryImage.large.right}] xl:rotate-[${secondaryImage.large.rotation}]
    `
  };
}
