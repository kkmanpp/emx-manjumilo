import SectionCard from "@/components/SectionCard";

export default function SectionLayout({ sections }) {
  const visibleSections = sections
    .filter((section) => section.isVisible)
    .sort((a, b) => a.priority - b.priority);

  if (visibleSections.length === 0) {
    return null;
  }

  // Group sections by region
  const leftSections = visibleSections.filter(
    (section) => section.region === "left"
  );
  const rightSections = visibleSections.filter(
    (section) => section.region === "right"
  );

  // Determine layout adjustments
  const isLeftEmpty = leftSections.length === 0;
  const isRightEmpty = rightSections.length === 0;
  const isSingleSection = visibleSections.length === 1;

  return (
    <div
      className={`grid gap-y-4 mt-8 w-full ${
        isSingleSection
          ? "grid-cols-1" // Single section spans entire grid
          : "tablet:grid-cols-2 tablet:gap-x-4 grid-cols-1" // Standard two-column layout
      }`}
    >
      {/* Left Column */}
      {!isLeftEmpty && (
        <div
          className={`grid laptop:grid-rows-auto gap-4 ${
            isRightEmpty && "tablet:col-span-2" // span entire grid if right column is empty
          }`}
        >
          {leftSections.map(({ id, title, content }) => (
            <SectionCard key={id} title={title}>
              {content()}
            </SectionCard>
          ))}
        </div>
      )}

      {/* Right Column */}
      {!isRightEmpty && (
        <div
          className={`grid laptop:grid-rows-auto gap-4 ${
            isLeftEmpty && "tablet:col-span-2" // span entire grid if left column is empty
          }`}
        >
          {rightSections.map(({ id, title, content }) => (
            <SectionCard key={id} title={title}>
              {content()}
            </SectionCard>
          ))}
        </div>
      )}

      {/* Single Section (Center Alignment) */}
      {isSingleSection && (
        <div className="w-full flex justify-center">
          <SectionCard
            key={visibleSections[0].id}
            title={visibleSections[0].title}
          >
            {visibleSections[0].content()}
          </SectionCard>
        </div>
      )}
    </div>
  );
}
