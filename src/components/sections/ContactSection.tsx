'use client'

export default function ContactSection() {
    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
                Feel free to reach out by email:
            </p>
            <a
                href="mailto:adimalka14@gmail.com"
                className="text-primary font-medium hover:underline"
            >
                adimalka14@gmail.com
            </a>
        </section>
    )
}
