import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";

const Fulshear = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">Fulshear, TX</h1>
              <p className="text-xl text-muted-foreground">
                Estate & Acreage Tree Management in Fulshear, TX
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At <CompanyName />, we specialize in providing expert tree services for the unique properties of Fulshear, from large acreage lots to custom estate homes. We understand that Fulshear residents value their wide-open spaces and the native beauty of their mature pecan and oak trees. Our services are designed to manage and enhance these natural landscapes, offering everything from selective clearing for new construction to preservation pruning and long-term health plans for your most valuable trees.
                </p>
                
                <p className="text-lg">
                  As Fulshear grows, the biggest challenge is developing property while preserving the magnificent trees that give the area its scenic, rural character. Our ISA Certified Arborists are experts in tree preservation during construction and land development. We work with homeowners to create a safe, beautiful, and sustainable environment that balances your vision with the health of your native trees, ensuring your Fulshear property remains a stunning Texas retreat.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fulshear;