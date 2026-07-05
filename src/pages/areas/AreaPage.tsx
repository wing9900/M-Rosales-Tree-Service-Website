import { Fragment } from "react";
import { Navigate, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { getServiceAreaContent } from "@/lib/serviceAreasContent";

const renderWithCompanyName = (text: string) => {
  const parts = text.split("M Rosales Tree Service");
  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <CompanyName />}
      {part}
    </Fragment>
  ));
};

const AreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceAreaContent(slug) : undefined;

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold">{area.city}, TX</h1>
              <p className="text-xl text-muted-foreground">{area.subtitle}</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg mb-6">{renderWithCompanyName(area.paragraphs[0])}</p>
                <p className="text-lg">{renderWithCompanyName(area.paragraphs[1])}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AreaPage;
