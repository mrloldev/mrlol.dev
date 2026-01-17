import BackgroundContainer from "@/components/BackgroundContainer";
import Story from "@/components/story";

export default function StoryPage() {
  return (
    <main>
      <BackgroundContainer className="flex flex-col items-center justify-between min-h-screen py-8 sm:py-12">
        <Story />
      </BackgroundContainer>
    </main>
  );
}
