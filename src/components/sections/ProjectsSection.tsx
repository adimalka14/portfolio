import React from 'react';

import { projects } from '@/lib/projects';
import ProjectCard from '@/components/cards/ProjectCard';
import { Project } from '@/types/Project.type';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
                My Projects
            </h2>

            <div className="space-y-16 max-w-6xl mx-auto">
                {Object.entries(projects).map(([category, projectList]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold capitalize mb-6 border-b pb-2">
                            {category === 'npmPackages'
                                ? 'NPM Packages'
                                : category}
                        </h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                                projectList?.map((project: Project) => (
                                    <ProjectCard
                                        key={project.title}
                                        {...project}
                                    />
                                )) as React.ReactNode[]
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
