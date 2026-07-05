import { Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const ServiceAreas = () => {
  return (
    <Layout>
      <Navigate to="/#service-areas" replace />
    </Layout>
  );
};

export default ServiceAreas;