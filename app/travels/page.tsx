import BackgroundContainer from "@/components/BackgroundContainer";
import TravelMap from "@/components/travels/TravelMap";

export default function TravelsPage() {
  return (
    <main>
      <BackgroundContainer className="flex flex-col items-center justify-between min-h-screen py-8 sm:py-12">
        <TravelMap />
      </BackgroundContainer>
    </main>
  );
}
