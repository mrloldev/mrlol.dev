import BackgroundContainer from "@/components/BackgroundContainer";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main>
      <BackgroundContainer className="flex flex-col items-center justify-between min-h-screen py-8 sm:py-12">
        <Projects />
      </BackgroundContainer>
    </main>
  );
}
