import {
    HeroSection,
    TechStack,
    ProjectsSection,
    ContactSection,
} from '@/components/sections';
import AppBar from '@/components/layout/AppBar/AppBar';

export default function HomePage() {
    return (
        <>
            <AppBar />
            <HeroSection />
            <TechStack />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
