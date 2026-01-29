import type { MetadataRoute } from "next";
import courses from "@/app/data/courses.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://britskillacademy.com";

  const staticRoutes = [
    "",
    "/courses",
    "/courses/gcse",
    "/courses/a-level",
    "/courses/functional-skills",
    "/courses/esol",
    "/how-it-works",
    "/assessment",
    "/get-in-touch",
    "/policies/terms",
    "/policies/privacy",
    "/policies/safeguarding",
  ];

  const courseRoutes = (courses as { slug: string }[]).map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...courseRoutes,
  ];
}
