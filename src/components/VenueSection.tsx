import venueImage from "@/assets/venue.jpg";

const VenueSection = () => {
  return (
    <section className="relative h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={venueImage}
          alt="Hampton Court Venue"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/40 via-transparent to-hero-overlay/40" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="mb-4 text-5xl font-bold tracking-wide md:text-6xl drop-shadow-lg">
            Hampton Court Hillsborough
          </h2>
          <p className="text-xl font-light tracking-wide drop-shadow-md">
            Where our forever begins
          </p>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
