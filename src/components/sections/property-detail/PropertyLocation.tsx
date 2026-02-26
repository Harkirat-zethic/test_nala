export default function PropertyLocation({ mapEmbedUrl }: { mapEmbedUrl: string }) {
  return (
    <section className="px-[1.25rem] py-[2rem] sm:px-[2rem] sm:py-[3rem] md:px-[3rem] lg:px-[7.8%] lg:py-[5rem]">
      <h2 className="font-afacad text-[clamp(1.75rem,4.17vw,5rem)] short:text-[7.5vh] font-medium text-[#252525]">
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
          className="h-[clamp(18rem,52vw,50rem)] short:h-[65vh] w-full"
        />
      </div>
    </section>
  );
}
