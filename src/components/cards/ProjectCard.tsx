'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    Button,
    Badge,
} from '@/components/ui';
import { Project } from '@/types/Project.type';

type Props = Project;

export default function ProjectCard({
    title,
    features,
    stack,
    image,
    demo,
    github,
}: Props) {
    return (
        <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <Image
                src={image}
                alt={title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <h3 className="text-xl font-bold">{title}</h3>
                {
                    (features?.map((f) => (
                        <p key={f} className="text-muted-foreground text-sm">
                            {f}
                        </p>
                    )) ?? null) as React.ReactNode
                }
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {
                    (stack?.map((t) => <Badge key={t}>{t}</Badge>) ??
                        null) as React.ReactNode
                }
            </CardContent>

            <CardFooter className="flex justify-between">
                {
                    (demo ? (
                        <Button asChild variant="outline" size="sm">
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4 mr-1" /> Live
                            </a>
                        </Button>
                    ) : undefined) as React.ReactNode
                }
                <Button asChild variant="ghost" size="sm">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
