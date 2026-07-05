import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";

const SugarLand = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">Sugar Land, TX</h1>
              <p className="text-xl text-muted-foreground">
                Expert Arborist Services in Sugar Land, TX
              </p>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">
                  At <CompanyName />, we provide top-tier tree services for the meticulously planned communities of Sugar Land. We recognize that homeowners here hold their properties to the highest standard, and we are committed to delivering tree care that meets and exceeds those expectations. Our certified arborists specialize in services from artful pruning to complex removals, always mindful of HOA guidelines and the pristine aesthetic that defines Sugar Land. We are your trusted partners in maintaining a beautiful, safe, and valuable landscape.
                </p>
                
                <p className="text-lg">
                  The health of the mature oaks and pecans that grace Sugar Land is paramount. Our team focuses on preservation through proactive health assessments and disease management, ensuring these magnificent trees continue to thrive. We understand the importance of a flawless appearance, and our work is performed with precision and a commitment to perfect cleanup, ensuring your property remains a standout in one of Texas's most beautiful suburbs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SugarLand;