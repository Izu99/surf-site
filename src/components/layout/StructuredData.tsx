export default function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        "name": "Hiriketiya Surf with Mali",
        "image": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
        "@id": "https://hiriketiyasurfwithmali.com",
        "url": "https://hiriketiyasurfwithmali.com",
        "telephone": "+94705583277",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hiriketiya Beach",
            "addressLocality": "Dickwella",
            "addressRegion": "Southern Province",
            "postalCode": "82400",
            "addressCountry": "LK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 5.9189,
            "longitude": 80.7134
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "06:00",
            "closes": "18:30"
        },
        "sameAs": [
            "https://www.instagram.com/hiriketiyasurfwithmali",
            "https://wa.me/94705583277"
        ],
        "priceRange": "$$"
    };

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Beginner Surf Lessons",
        "description": "Learn to surf with expert guidance at Hiriketiya Bay. Perfect for first-timers.",
        "provider": {
            "@type": "Organization",
            "name": "Hiriketiya Surf with Mali",
            "sameAs": "https://hiriketiyasurfwithmali.com"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the best time to surf in Hiriketiya?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main surf season in Hiriketiya is from November to April when the waves are consistently clean and perfect for all levels. However, the bay is surfable almost year-round due to its protected geography."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need my own surfboard?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, all surf lessons with Mali include a high-quality surfboard suited to your skill level, as well as a rash guard and sun protection."
                }
            },
            {
                "@type": "Question",
                "name": "Are lessons suitable for children?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer special kids' lessons for children under 10. Our instructors are very patient and safety-conscious."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
