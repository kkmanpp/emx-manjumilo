import { getDictionary } from "../dictionaries";
import Image from "next/image";

export default async function Profile({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const {
    sections,
    company_overview,
    company_mission_and_purpose,
    core_value,
    product_overview,
    company_future_outlook,
  } = t.profile;
  const { name, established, core_business, product_type } = company_overview;
  const {
    all_natural_ingredients,
    environmental_philosophy,
    quality_assurance,
    innovation_and_diversity,
  } = core_value;
  const {
    natural_nutritional_supplements,
    organic_drinks,
    healthy_snacks,
    beauty_and_skincare,
  } = product_overview;
  return (
    <div className="smallTablet:px-6 tablet:px-9 largeTable:px-24 laptop:px:32 min-h-screen dark:text-gray-900">
      {/* Company Overview */}
      <main className="mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg">
        <section>
          <div className="text-3xl font-semibold text-teal-700 mb-4">
            {sections.company_overview}
          </div>
          <div className="flex flex-col largeTablet:flex-row gap-6">
            {/* Image */}
            <div className="relative w-36 h-36 smallTablet:w-48 smallTablet:h-48 largeTablet:w-64 largeTablet:h-64 order-1 largeTablet:order-2 largeTablet:flex-1 flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Company Overview"
                className="absolute right-0 object-contain "
                fill
              />
            </div>
            {/* Content */}
            <div className="text-xl order-2 largeTablet:order-1 largeTablet:flex-1 space-y-2">
              <div>
                <strong>{name.key}:</strong> {name.value}
              </div>
              <div>
                <strong>{established.key}:</strong> {established.value}
              </div>
              <div>
                <strong>{core_business.key}:</strong> {core_business.value}
              </div>
              <div>
                <strong>{product_type.key}:</strong> {product_type.value}
              </div>
            </div>
          </div>
        </section>
        {/* Mission and Purpose */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">
            {sections.company_mission_and_purpose}
          </h2>
          <p className="text-lg">{company_mission_and_purpose.value}</p>
        </section>

        {/* Core Values */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">
            {sections.core_value}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{all_natural_ingredients.key}:</strong>{" "}
              {all_natural_ingredients.value}
            </li>
            <li>
              <strong>{environmental_philosophy.key}:</strong>{" "}
              {environmental_philosophy.value}
            </li>
            <li>
              <strong>{quality_assurance.key}:</strong>{" "}
              {quality_assurance.value}
            </li>
            <li>
              <strong>{innovation_and_diversity.key}:</strong>{" "}
              {innovation_and_diversity.value}
            </li>
          </ul>
        </section>
        {/* Product Overview */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">
            {sections.product_overview}
          </h2>
          <p className="mb-4">{product_overview.summary}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{natural_nutritional_supplements.key}:</strong>{" "}
              {natural_nutritional_supplements.value}
            </li>
            <li>
              <strong>{organic_drinks.key}:</strong> {organic_drinks.value}
            </li>
            <li>
              <strong>{healthy_snacks.key}:</strong> {healthy_snacks.value}
            </li>
            <li>
              <strong>{beauty_and_skincare.key}:</strong>{" "}
              {beauty_and_skincare.value}
            </li>
          </ul>
        </section>
        {/* Future Outlook */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">
            {sections.company_future_outlook}
          </h2>
          <p className="text-lg">{company_future_outlook.value}</p>
        </section>
      </main>
    </div>
  );
}
