import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";

const Katy = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">Katy, TX</h1>
              <p className="text-xl text-muted-foreground">
                Premier Tree Services for the Katy Community
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At <CompanyName />, we are dedicated to serving the vibrant, growing community of Katy, TX. We understand that in master-planned neighborhoods like Cinco Ranch and across the area, a well-maintained landscape is a source of pride. Our team offers a full suite of tree services, including professional pruning, safe tree removal, and stump grinding, all tailored to the needs of Katy homeowners. Whether you have newly planted trees or mature oaks that have stood for decades, we have the local expertise to keep them healthy and beautiful.
                </p>
                
                <p className="text-lg">
                  As Katy continues to expand, it's crucial to manage the health of both new and established trees. Our arborists understand the challenges of our local soil and the stress that summer heat and occasional drought can place on your landscape. We provide proactive tree care designed to enhance your property's curb appeal while ensuring your trees are structurally sound and safe for your family, contributing to the beautiful, well-kept aesthetic Katy is known for.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Katy;