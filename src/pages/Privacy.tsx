import Layout from "@/components/layout/Layout";
import { CompanyName } from "@/components/CompanyName";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/business";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-section-title mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 5, 2026</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              <CompanyName /> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
              This policy explains what information we collect through our website and how we use it.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Information We Collect</h2>
              <p>
                When you use our contact form, we collect the information you provide: your name,
                email address, phone number, property address, and message. We do not require you to
                create an account to browse our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How We Use Your Information</h2>
              <p>
                We use contact form submissions only to respond to your tree service inquiry,
                provide estimates, schedule work, and follow up about services you requested. We do
                not sell, rent, or trade your personal information to third parties for marketing
                purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Third-Party Services</h2>
              <p>
                Our contact page includes an embedded Google Map, which is provided by Google and
                subject to{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                . Our site links to our{" "}
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Facebook page
                </a>
                , which has its own privacy practices.
              </p>
              <p>
                This website does not use advertising trackers or analytics cookies at this time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Data Retention</h2>
              <p>
                We keep contact inquiries only as long as needed to respond, provide services, and
                maintain business records related to your request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Your Choices</h2>
              <p>
                You may contact us to ask about information you submitted or to request that we
                correct or delete it, subject to any records we are required to keep for business or
                legal purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, contact us at{" "}
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-primary hover:underline">
                  {BUSINESS.phone}
                </a>{" "}
                or visit our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
                . Our business address is {BUSINESS.fullAddress}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Changes to This Policy</h2>
              <p>
                We may update this page from time to time. The &quot;Last updated&quot; date at the
                top of this page will reflect any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
