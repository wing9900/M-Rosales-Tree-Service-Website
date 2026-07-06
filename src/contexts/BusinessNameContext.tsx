import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DEFAULT_BUSINESS_NAME = "M Rosales Tree Service";
const TITLE_SUFFIX = "Houston Tree Care";
const DEFAULT_TITLE = "M Rosales Tree Service | Professional Tree Care in Houston, TX";
const COMPANY_STORAGE_KEY = "ghl_company";

type BusinessNameContextType = {
  businessName: string;
};

const BusinessNameContext = createContext<BusinessNameContextType>({
  businessName: DEFAULT_BUSINESS_NAME,
});

export function useBusinessName() {
  const context = useContext(BusinessNameContext);
  if (!context) {
    throw new Error("useBusinessName must be used within BusinessNameProvider");
  }
  return context;
}

export function BusinessNameProvider({ children }: { children: React.ReactNode }) {
  const [searchParams] = useSearchParams();
  const [businessName, setBusinessName] = useState(DEFAULT_BUSINESS_NAME);
  const [useCustomTitle, setUseCustomTitle] = useState(false);

  // Extract company from URL (?company=... from GHL), or bizname for backward compat, or sessionStorage
  useEffect(() => {
    try {
      const companyFromUrl = searchParams.get("company") ?? searchParams.get("bizname");
      if (companyFromUrl && companyFromUrl.trim() !== "") {
        const decoded = decodeURIComponent(companyFromUrl.trim());
        setBusinessName(decoded);
        setUseCustomTitle(true);
        sessionStorage.setItem(COMPANY_STORAGE_KEY, decoded);
      } else {
        const stored = sessionStorage.getItem(COMPANY_STORAGE_KEY);
        if (stored && stored.trim() !== "") {
          setBusinessName(stored);
          setUseCustomTitle(true);
        } else {
          setBusinessName(DEFAULT_BUSINESS_NAME);
          setUseCustomTitle(false);
        }
      }
    } catch {
      setBusinessName(DEFAULT_BUSINESS_NAME);
      setUseCustomTitle(false);
    }
  }, [searchParams]);

  // Update document title
  useEffect(() => {
    if (useCustomTitle) {
      document.title = `${businessName} - ${TITLE_SUFFIX}`;
    } else {
      document.title = DEFAULT_TITLE;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [businessName, useCustomTitle]);

  const value = useMemo(() => ({ businessName }), [businessName]);

  return (
    <BusinessNameContext.Provider value={value}>
      {children}
    </BusinessNameContext.Provider>
  );
}
