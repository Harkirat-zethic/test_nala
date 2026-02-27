import Image from "next/image";
import type { PropertyDetailCategory, PropertyStaff } from "@/types";

const ICON_NAMES = [
  "bedroom", "wardrobe", "window", "hoist", "ac",
  "living-room", "park", "fence", "kitchen", "sink",
  "bathtub", "floor-plan", "tapware", "laundry",
  "battery", "support", "fire-safety",
  "construction", "customize", "wall", "glass", "lock", "noise", "intercom",
];

export default function PropertyDetails({
  details,
  staff,
}: {
  details: PropertyDetailCategory[];
  staff?: PropertyStaff[];
}) {
  return (
    <section className="px-[1.25rem] py-[2rem] sm:px-[2rem] sm:py-[3rem] md:px-[3rem] lg:px-[7.7%] lg:py-[5rem]">
      <h2 className="font-afacad text-[clamp(1.75rem,4.17vw,5rem)] short:text-[7.5vh] font-medium text-[#252525]">
        Property details
      </h2>

      <div className="mt-6 flex flex-col gap-10 sm:mt-8 sm:gap-12 lg:mt-12 lg:gap-[7.5rem]">
        {details.map((category) => (
          <div key={category.title}>
            {/* Category heading + divider */}
            <div className="border-b border-[#e2e4e5] pb-3 sm:pb-5">
              <h3 className="font-afacad text-[clamp(1.25rem,2.5vw,3rem)] short:text-[4.5vh] font-medium tracking-[0.01em] text-[#252525]">
                {category.title}
              </h3>
            </div>

            {/* Feature grid */}
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:mt-7">
              {category.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded bg-white border border-[#e6e6e6] p-4 sm:gap-5 sm:p-5 lg:gap-6 lg:p-6"
                >
                  <div className="flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center overflow-hidden sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]">
                    {ICON_NAMES.includes(feature.icon) ? (
                      <Image
                        src={`/images/property-icons/${feature.icon}.svg`}
                        alt=""
                        width={100}
                        height={100}
                        className="h-full w-full"
                      />
                    ) : (
                      <Image
                        src="/images/property-icons/bedroom.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-full w-full"
                      />
                    )}
                  </div>
                  <div className="flex min-w-0 flex-col gap-px">
                    <span className="font-outfit text-[0.813rem] text-[#61656e] sm:text-[clamp(0.813rem,0.94vw,1.125rem)]">
                      # {feature.label}
                    </span>
                    <span className="font-outfit text-[0.875rem] leading-snug text-[#252525] sm:text-[clamp(0.938rem,1.25vw,1.5rem)]">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
