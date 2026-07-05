import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DEFAULT_BUSINESS_NAME = "Local Tree Services";
const TITLE_SUFFIX = "TruAido Demo";
const DEFAULT_TITLE = "Professional Tree Services in Houston | Local Tree Services";
const COMPANY_STORAGE_KEY = "ghl_company";

type BusinessNameContextType = {
  businessName: string;
  isFromUrl: boolean;
};

const BusinessNameContext = createContext<BusinessNameContextType>({
  businessName: DEFAULT_BUSINESS_NAME,
  isFromUrl: false,
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
  const [isFromUrl, setIsFromUrl] = useState(false);

  // Extract company from URL (?company=... from GHL), or bizname for backward compat, or sessionStorage
  useEffect(() => {
    try {
      const companyFromUrl = searchParams.get("company") ?? searchParams.get("bizname");
      if (companyFromUrl && companyFromUrl.trim() !== "") {
        const decoded = decodeURIComponent(companyFromUrl.trim());
        setBusinessName(decoded);
        setIsFromUrl(true);
        sessionStorage.setItem(COMPANY_STORAGE_KEY, decoded);
      } else {
        const stored = sessionStorage.getItem(COMPANY_STORAGE_KEY);
        if (stored && stored.trim() !== "") {
          setBusinessName(stored);
          setIsFromUrl(true);
        } else {
          setBusinessName(DEFAULT_BUSINESS_NAME);
          setIsFromUrl(false);
        }
      }
    } catch {
      setBusinessName(DEFAULT_BUSINESS_NAME);
      setIsFromUrl(false);
    }
  }, [searchParams]);

  // Update document title
  useEffect(() => {
    if (isFromUrl) {
      document.title = `${businessName} - ${TITLE_SUFFIX}`;
    } else {
      document.title = DEFAULT_TITLE;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [businessName, isFromUrl]);

  // GHL Web Call: pass metadata to AI Voice Agent (with 1.5s retry for slow widget load)
  useEffect(() => {
    if (!isFromUrl) return;

    const setMetadata = () => {
      if (typeof window !== "undefined" && (window as unknown as { ghlWebCall?: { setMetadata: (m: object) => void } }).ghlWebCall?.setMetadata) {
        try {
          (window as unknown as { ghlWebCall: { setMetadata: (m: object) => void } }).ghlWebCall.setMetadata({ business_name: businessName });
        } catch (e) {
          console.warn("[company] GHL setMetadata error:", e);
        }
      }
    };

    setMetadata();
    const retryId = setTimeout(setMetadata, 1500);
    return () => clearTimeout(retryId);
  }, [businessName, isFromUrl]);

  const value = useMemo(() => ({ businessName, isFromUrl }), [businessName, isFromUrl]);

  return (
    <BusinessNameContext.Provider value={value}>
      {children}
    </BusinessNameContext.Provider>
  );
}
