import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";

const Rosenberg = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">Rosenberg, TX</h1>
              <p className="text-xl text-muted-foreground">
                Dedicated Tree Services for the Rosenberg Community
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At <CompanyName />, we are honored to provide professional tree care to the residents of Rosenberg, a community with deep roots and a strong sense of history. We specialize in caring for the large, mature trees that grace Rosenberg's established neighborhoods, offering services like health assessments, structural pruning, and safe removal when necessary. We bring modern arboricultural science to every job, ensuring these legacy trees are preserved for future generations to enjoy.
                </p>
                
                <p className="text-lg">
                  The historic trees of Rosenberg are irreplaceable assets, but they require expert care to remain safe and healthy. Our certified arborists are skilled in identifying and mitigating potential hazards in older trees, from structural weaknesses to disease. We are committed to helping Rosenberg residents protect their homes and preserve the unique, small-town charm that these magnificent trees help create, ensuring a safe and beautiful community for years to come.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rosenberg;