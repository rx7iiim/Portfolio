import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const aOrder =
      typeof a.metadata.order === "number" ? a.metadata.order : undefined;
    const bOrder =
      typeof b.metadata.order === "number" ? b.metadata.order : undefined;

    // If both have explicit order, sort ascending by it
    if (
      typeof aOrder === "number" &&
      typeof bOrder === "number" &&
      aOrder !== bOrder
    ) {
      return aOrder - bOrder;
    }

    // If only one has order, it comes first
    if (typeof aOrder === "number" && typeof bOrder !== "number") return -1;
    if (typeof bOrder === "number" && typeof aOrder !== "number") return 1;

    // Fallback to published date (newest first)
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
