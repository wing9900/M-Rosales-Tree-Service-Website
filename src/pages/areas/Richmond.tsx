import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";

const Richmond = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">Richmond, TX</h1>
              <p className="text-xl text-muted-foreground">
                Richmond's Choice for Professional Tree Care
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At <CompanyName />, we are proud to serve the Richmond community, honoring its unique blend of historic Texas charm and dynamic modern growth. From caring for the venerable old trees near the historic courthouse to managing the landscapes of new master-planned communities, our team provides comprehensive tree services tailored to Richmond's diverse needs. We offer everything from selective lot clearing for new homes to professional pruning and emergency response for properties along the Brazos River.
                </p>
                
                <p className="text-lg">
                  The growth in Richmond presents a unique opportunity to blend the new with the old. Our arborists specialize in creating sustainable landscapes that respect the area's natural beauty while ensuring the safety and health of your trees. We understand the local soil conditions and the challenges posed by our proximity to the river, providing expert care that protects your property and enhances its long-term value and appeal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Richmond;