export default function PropertyLocation({ mapEmbedUrl }: { mapEmbedUrl: string }) {
  return (
    <section className="px-[1.25rem] py-[2rem] sm:px-[2rem] sm:py-[3rem] md:px-[3rem] lg:px-[7.8%] lg:py-[5rem]">
      <h2 className="font-afacad text-[clamp(1.75rem,4.17vw,5rem)] font-medium text-[#252525]">
        Location
      </h2>
      <div className="mt-6 overflow-hidden rounded-md sm:mt-8 sm:rounded-lg lg:mt-12">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Property location"
          className="h-[18rem] w-full sm:h-[25rem] md:h-[30rem] lg:h-[50rem]"
        />
      </div>
    </section>
  );
}
