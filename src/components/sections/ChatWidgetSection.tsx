import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

const CheckIcon = () => (
  <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
    <svg width="11.14" height="8.91" viewBox="0 0 10 8" fill="none">
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="#e8620a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// Adjust this to change space between "11pm." and "Sarah answers." on mobile (e.g. "4px", "8px", "0.5em")
const MOBILE_PHRASE_GAP = "1.5px";
// Adjust vertical space between "Your phone rings" line and "Sarah answers." line on mobile (e.g. "4px", "8px")
const MOBILE_PHRASE_GAP_VERTICAL = "3px";
// Adjust this to shift the Live badge up/down on mobile: negative = up, positive = down (e.g. "-6px", "4px")
const MOBILE_BADGE_OFFSET_Y = "-2px";

// Mobile card position (center of screen): "50%" = center; adjust top value to move card up/down (e.g. "48" = up, "51" = down)
const MOBILE_CARD_LEFT = "50%";
// Option 2: viewport-height-based positioning for all phone sizes (mini, SE, regular, Pro Max, Android)
// Uses Visual Viewport API; % = distance from top of viewport. Higher = card lower on screen.
const MOBILE_CARD_TOP_SHORT = 30; // % for viewports < 700px (iPhone mini, SE, small Android)
const MOBILE_CARD_TOP_TALL = 47; // % for viewports >= 700px (regular iPhone, Pro Max, large Android, DevTools)
const MOBILE_CARD_TOP_VIEWPORT_BREAKPOINT = 700;
const MOBILE_CARD_TRANSFORM = "translate(-50%, 4.5%)";

// "Talk to Sarah now" text size (mobile = above divider, desktop = bottom-right)
const MOBILE_TALK_FONT_SIZE = "17px";
const DESKTOP_TALK_FONT_SIZE = "17px";

// Arrow size for "Talk to Sarah now" (mobile and desktop)
const MOBILE_ARROW_SIZE = 42;
const DESKTOP_ARROW_SIZE = 36;

// "TRY AN AGENT FREE" button: fontSize, padding (shared)
const MOBILE_CTA_FONT_SIZE = "14.4px";
const DESKTOP_CTA_FONT_SIZE = "12.4px";
const CTA_PADDING = "10px 16px"; // shared by mobile and desktop

// Mobile: "Talk to Sarah now" position when inline=false (absolute layout)
const MOBILE_CTA_OFFSET_BOTTOM = "4px";
const MOBILE_CTA_OFFSET_RIGHT = "0px";
const MOBILE_CTA_OFFSET_X = "-143px"; // transform: negative = left
const MOBILE_CTA_OFFSET_Y = "0px";

// Desktop: "Talk to Sarah now" position when inline=false (absolute layout)
const DESKTOP_CTA_OFFSET_BOTTOM = "12px";
const DESKTOP_CTA_OFFSET_RIGHT = "16px";
const DESKTOP_CTA_OFFSET_X = "-86px"; // transform: negative = left
const DESKTOP_CTA_OFFSET_Y = "-4px";

// Divider line above CTA: width (mobile), desktop uses marginRight
const MOBILE_DIVIDER_WIDTH = "100%";
const DESKTOP_DIVIDER_MARGIN_RIGHT = "0px"; // larger = shorter line

// Spacing: divider margin and CTA margin (same value used for both)
const MOBILE_SECTION_MARGIN = "9.53px"; // divider + CTA spacing on mobile
const DESKTOP_SECTION_MARGIN = "15.14px"; // divider + CTA spacing on desktop
const TALK_MARGIN_LEFT = "12px"; // shift CTA/Talk line left/right
// Desktop "Talk to Sarah now" (inline layout): positive = right/down, negative = left/up
const DESKTOP_TALK_MARGIN_LEFT = "36px";
const DESKTOP_TALK_MARGIN_TOP = "-6px";
// Desktop CTA button ("Try an agent FREE..."): positive = right/down, negative = left/up (translateY does not affect card height)
const DESKTOP_CTA_MARGIN_LEFT = "10px";
const DESKTOP_CTA_BUTTON_OFFSET_Y = "-11px";
// Mobile "Talk to Sarah now" (inline layout): positive = right/down, negative = left/up
const MOBILE_TALK_MARGIN_LEFT = "50px";
const MOBILE_TALK_MARGIN_TOP = "-4px";
// Mobile CTA button ("Try an agent FREE..."): positive = down, negative = up (uses transform, does not affect card height)
const MOBILE_CTA_BUTTON_OFFSET_Y = "-6px";

// Mobile card dimensions
const MOBILE_CARD_WIDTH = "min(430px, calc(100vw - 16px))";
const MOBILE_CARD_MIN_HEIGHT = "auto"; // e.g. "420px" to make taller
const MOBILE_CARD_PADDING_V = "12.23px"; // top padding (sides unchanged)
const MOBILE_CARD_PADDING_H = "15.44px"; // left/right padding
const MOBILE_CARD_PADDING_BOTTOM = "9px"; // bottom only - increase to extend bottom (e.g. "24px")

// Desktop card position: increase bottom = up, decrease bottom = down; increase right = left, decrease right = right
const DESKTOP_CARD_BOTTOM = "-35px";
const DESKTOP_CARD_RIGHT = "5.5px";
// Desktop card dimensions
const DESKTOP_CARD_WIDTH = "385px";
const DESKTOP_CARD_MIN_HEIGHT = "auto"; // ignored if DESKTOP_CARD_HEIGHT is set
const DESKTOP_CARD_HEIGHT = "450px"; // set to "" to disable; e.g. "500px" forces exact height (minHeight ignored when set)
const DESKTOP_CARD_PADDING_V = "15px"; // top padding (sides unchanged)
const DESKTOP_CARD_PADDING_H = "16px"; // left/right padding
const DESKTOP_CARD_PADDING_BOTTOM = "0px"; // bottom only - increase to extend bottom (e.g. "28px")
// Trim from bottom of card: negative = reduce height / bring bottom edge up (e.g. "-20px", "-40px")
const DESKTOP_CARD_BOTTOM_TRIM = "-40px";
const MOBILE_CARD_BOTTOM_TRIM = "0px";

// Mobile banner: top padding of the green box only (0–20px; reduce to bring top edge down; content stays in place; avoid negative)
const BANNER_PADDING_TOP = "0px";
// Mobile banner: extra trim from top (increase to reduce banner height from top; e.g. "10px" removes 10px of green at top)
const BANNER_TOP_TRIM = "2px";
// Mobile banner: margin above "No credit card required..." (increase to move it down, decrease/negative to move up)
const BANNER_DISCLAIMER_MARGIN_TOP = "-6px";
// Mobile banner: offset for button + disclaimer (negative to move both up closer to headline, e.g. "-4px")
const BANNER_BUTTON_GROUP_OFFSET = "-2px";
// Mobile banner: marginBottom positive = content moves UP (banner grows); negative = content moves down (banner shrinks)
const BANNER_CONTENT_MARGIN_BOTTOM = "-52px";
const BANNER_CONTENT_MARGIN_LEFT = "0px";
// Mobile banner: increase top only - add more green at top (e.g. "20px", "30px")
const BANNER_PADDING_TOP_EXTRA = "18px";
// Mobile banner: CTA and disclaimer left/right (positive = right, negative = left)
const BANNER_CTA_MARGIN_LEFT = "19px";
const BANNER_DISCLAIMER_MARGIN_LEFT = "1px";
// Mobile banner: CTA button dimensions (responsive for < 390px; min caps at 85vw to prevent overflow)
const BANNER_CTA_MIN_WIDTH = "min(240px, 85vw)";
const BANNER_CTA_MAX_WIDTH = "min(280px, 90vw)";
const BANNER_CTA_PADDING = "10px 20px";

// Small phones only: extra right padding to avoid GHL call button overlap (iPhone SE, small Android)
const SMALL_PHONE_BREAKPOINT = "390px";
const SMALL_PHONE_GHL_SAFE_ZONE = "100px";
const SMALL_PHONE_CTA_GROUP_PADDING_RIGHT = "80px"; // less than GHL_SAFE_ZONE = button ~20% wider
// Small phones: card vertical position. Formula: at 320px width → MIN%, at 390px → MAX%. Lower = higher on screen.
const SMALL_PHONE_CARD_TOP_BREAKPOINT = 390;
const SMALL_PHONE_CARD_TOP_MIN = 23;
const SMALL_PHONE_CARD_TOP_MAX = 28;

// Desktop banner card (after Sarah card closed): padding. Card width = content + left + right.
const DESKTOP_BANNER_PADDING_TOP = "12px";
const DESKTOP_BANNER_PADDING_BOTTOM = "15px";
const DESKTOP_BANNER_PADDING_LEFT = "60px";
const DESKTOP_BANNER_PADDING_RIGHT = "70"; // right side (GHL button area); increase to make card wider on right
const DESKTOP_BANNER_CONTENT_WIDTH = "300"; // inner content width
// Desktop banner: move each line independently
const DESKTOP_BANNER_HEADLINE_MARGIN_TOP = "-2px";
const DESKTOP_BANNER_HEADLINE_MARGIN_BOTTOM = "0px"; // positive = headline moves up, negative = headline moves down
const DESKTOP_BANNER_CTA_MARGIN_TOP = "6px"; // space between headline and CTA
const DESKTOP_BANNER_CTA_MARGIN_BOTTOM = "0px"; // positive = CTA moves up, negative = CTA moves down
const DESKTOP_BANNER_CTA_MARGIN_LEFT = "34px"; // positive = right, negative = left
const DESKTOP_BANNER_DISCLAIMER_MARGIN_TOP = "6px";
const DESKTOP_BANNER_DISCLAIMER_MARGIN_BOTTOM = "-8px"; // use negative (e.g. "-10px") to move disclaimer down toward card bottom
const DESKTOP_BANNER_DISCLAIMER_MARGIN_LEFT = "2px"; // positive = right, negative = left
const DESKTOP_BANNER_CTA_FONT_SIZE = "12px";
const DESKTOP_BANNER_CTA_FONT_WEIGHT = 800;

// Black outline for CTA button text and "Talk to Sarah now" (text-shadow for text, drop-shadow for SVG)
const TEXT_OUTLINE_SHADOW = "1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000";
const ARROW_OUTLINE_FILTER = "drop-shadow(1px 0 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(0 -1px 0 #000)";

const BULLET_ITEMS = [
  "No salary, no sick days, no stress",
  "Captures every call and website lead",
  "Books your calendar and notifies you instantly",
  "Converts satisfied customers into 5-star reviews and reduces missed appointments",
  "Consistently represents your business with professionalism that's true to your brand",
];

const handleContactClick = (e: React.MouseEvent, pathname: string) => {
  if (pathname === "/contact") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const CTALink = ({ fontSize, marginBottom, marginLeft, translateY }: { fontSize: string; marginBottom: string; marginLeft: string; translateY?: string }) => {
  const location = useLocation();
  return (
  <Link
    to="/contact"
    className="sarah-cta-button"
    onClick={(e) => handleContactClick(e, location.pathname)}
    style={{
      color: "#fff",
      fontSize,
      fontWeight: 710,
      textDecoration: "none",
      display: "inline-block",
      background: "#e8620a",
      padding: CTA_PADDING,
      borderRadius: "8px",
      border: "1px solid #000",
      cursor: "pointer",
      marginBottom,
      marginLeft,
      ...(translateY !== undefined ? { transform: `translateY(${translateY})` } : {}),
    }}
  >
    <span style={{ textShadow: TEXT_OUTLINE_SHADOW }}>
      Try an agent FREE for my business
    </span>
  </Link>
  );
};

const TalkToSarahBlock = ({ bottom, right, offsetX, offsetY, fontSize, arrowSize, inline, inlineMarginLeft, inlineMarginTop, inlineMarginBottom }: {
  bottom?: string; right?: string; offsetX?: string; offsetY?: string; fontSize: string; arrowSize: number;
  inline?: boolean; // when true, flows in document order (for mobile/desktop swapped layout)
  inlineMarginLeft?: string; inlineMarginTop?: string; inlineMarginBottom?: string; // optional overrides when inline
}) => (
  <div
    className="sarah-talk-block"
    aria-hidden
    style={{
      ...(inline ? { position: "relative" as const, marginBottom: inlineMarginBottom ?? MOBILE_SECTION_MARGIN, marginLeft: inlineMarginLeft ?? MOBILE_TALK_MARGIN_LEFT, marginTop: inlineMarginTop ?? MOBILE_TALK_MARGIN_TOP } : { position: "absolute" as const, bottom: bottom ?? "0", right: right ?? "0", transform: `translate(${offsetX ?? "0"}, ${offsetY ?? "0"})` }),
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }}
  >
    <span style={{ color: "#FFFFFF", fontSize, fontWeight: 710, letterSpacing: "0.04em", whiteSpace: "nowrap", textShadow: TEXT_OUTLINE_SHADOW, WebkitFontSmoothing: "antialiased" }}>
      Talk to Sarah now
    </span>
    <svg className="sarah-arrow-icon" width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: ARROW_OUTLINE_FILTER }}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </div>
);

// Mobile banner shown after user closes the Sarah card (mobile only, persists across pages)
const MobileBanner = () => {
  const location = useLocation();
  const paddingPx = Math.max(0, parseInt(BANNER_PADDING_TOP, 10) || 0);
  const extraTop = Math.max(0, parseInt(BANNER_PADDING_TOP_EXTRA, 10) || 0);
  const trimPx = Math.max(0, parseInt(BANNER_TOP_TRIM, 10) || 0);
  return (
  <div
    className="sarah-mobile-banner"
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      maxHeight: "22vh",
      clipPath: trimPx ? `inset(${trimPx}px 0 0 0)` : "none",
      background: "#1A311D",
      padding: `${paddingPx + extraTop}px clamp(16px, 5vw, 55px) calc(60px + env(safe-area-inset-bottom, 0px)) clamp(16px, 5vw, 20px)`,
      fontFamily: "'Montserrat', sans-serif",
      zIndex: 999,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: "9px",
    }}
  >
    <div style={{ marginTop: "auto", marginBottom: BANNER_CONTENT_MARGIN_BOTTOM, marginLeft: BANNER_CONTENT_MARGIN_LEFT, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "9px", width: "100%", transform: "scale(1.063)", transformOrigin: "bottom left" }}>
    <div className="banner-headline" style={{ textAlign: "left", lineHeight: 1.25 }}>
      <span style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700, textShadow: TEXT_OUTLINE_SHADOW }}>
        Every lead captured.{" "}
      </span>
      <span style={{ color: "#e8620a", fontSize: "19px", fontWeight: 700, textShadow: TEXT_OUTLINE_SHADOW }}>
        Zero effort.
      </span>
    </div>
    <div className="banner-cta-wrapper">
    <Link
      to="/contact"
      className="banner-cta-button"
      onClick={(e) => handleContactClick(e, location.pathname)}
      style={{
        display: "block",
        width: BANNER_CTA_MAX_WIDTH,
        minWidth: BANNER_CTA_MIN_WIDTH,
        flexShrink: 0,
        background: "#e8620a",
        color: "#FFFFFF",
        fontSize: "12.5px",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        textAlign: "center",
        padding: BANNER_CTA_PADDING,
        borderRadius: "8px",
        textDecoration: "none",
        border: "1px solid #000",
        marginTop: BANNER_BUTTON_GROUP_OFFSET,
        marginLeft: BANNER_CTA_MARGIN_LEFT,
      }}
    >
      <span style={{ textShadow: TEXT_OUTLINE_SHADOW }}>CLAIM MY FREE TRIAL</span>
    </Link>
    </div>
    <div className="banner-disclaimer" style={{ color: "#FFFFFF", fontSize: "11.05px", fontWeight: 805, textAlign: "left", opacity: 0.95, textShadow: TEXT_OUTLINE_SHADOW, marginTop: `calc(${BANNER_BUTTON_GROUP_OFFSET} + ${BANNER_DISCLAIMER_MARGIN_TOP})`, marginLeft: BANNER_DISCLAIMER_MARGIN_LEFT }}>
      No credit card required · Free setup · Cancel anytime
    </div>
    </div>
  </div>
  );
};

// Desktop card shown after user closes the Sarah card (desktop only, behind GHL call button, persists across pages)
const DesktopBanner = () => {
  const location = useLocation();
  const padL = parseInt(DESKTOP_BANNER_PADDING_LEFT, 10) || 30;
  const padR = parseInt(DESKTOP_BANNER_PADDING_RIGHT, 10) || 70;
  const contentW = parseInt(DESKTOP_BANNER_CONTENT_WIDTH, 10) || 300;
  const cardWidth = contentW + padL + padR;
  return (
  <div
    className="sarah-desktop-banner"
    style={{
      position: "fixed",
      bottom: "5px",
      right: "5px",
      width: `${cardWidth}px`,
      minHeight: "100px",
      background: "#1A311D",
      borderRadius: "12px",
      paddingTop: DESKTOP_BANNER_PADDING_TOP,
      paddingRight: `${padR}px`,
      paddingBottom: DESKTOP_BANNER_PADDING_BOTTOM,
      paddingLeft: DESKTOP_BANNER_PADDING_LEFT,
      fontFamily: "'Montserrat', sans-serif",
      zIndex: 998,
      boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 1px rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "auto", marginLeft: "-46px" }}>
      <div style={{ textAlign: "left", lineHeight: 1.3, whiteSpace: "nowrap", marginTop: DESKTOP_BANNER_HEADLINE_MARGIN_TOP, marginBottom: DESKTOP_BANNER_HEADLINE_MARGIN_BOTTOM }}>
        <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 700, textShadow: TEXT_OUTLINE_SHADOW }}>
          Every lead captured.{" "}
        </span>
        <span style={{ color: "#e8620a", fontSize: "20px", fontWeight: 700, textShadow: TEXT_OUTLINE_SHADOW }}>
          Zero effort.
        </span>
      </div>
      <Link
        to="/contact"
        className="banner-cta-button"
        onClick={(e) => handleContactClick(e, location.pathname)}
        style={{
          display: "block",
          marginTop: DESKTOP_BANNER_CTA_MARGIN_TOP,
          marginBottom: DESKTOP_BANNER_CTA_MARGIN_BOTTOM,
          marginLeft: DESKTOP_BANNER_CTA_MARGIN_LEFT,
          minWidth: "260px",
          maxWidth: "290px",
          background: "#e8620a",
          color: "#FFFFFF",
          fontSize: DESKTOP_BANNER_CTA_FONT_SIZE,
          fontWeight: DESKTOP_BANNER_CTA_FONT_WEIGHT,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          textAlign: "center",
          padding: CTA_PADDING,
          borderRadius: "8px",
          textDecoration: "none",
          border: "1px solid #000",
        }}
      >
        <span style={{ textShadow: TEXT_OUTLINE_SHADOW }}>CLAIM MY FREE TRIAL</span>
      </Link>
      <div style={{ color: "#FFFFFF", fontSize: "11.5px", fontWeight: 825, textAlign: "left", opacity: 0.9, textShadow: TEXT_OUTLINE_SHADOW, whiteSpace: "nowrap", marginTop: DESKTOP_BANNER_DISCLAIMER_MARGIN_TOP, marginBottom: DESKTOP_BANNER_DISCLAIMER_MARGIN_BOTTOM, marginLeft: DESKTOP_BANNER_DISCLAIMER_MARGIN_LEFT }}>
        No credit card required · Free setup · Cancel anytime
      </div>
    </div>
  </div>
  );
};

const ChatWidgetSection = () => {
  const [visible, setVisible] = useState(true);
  const mobileCardTopPx = useMemo(() => {
    if (typeof window === "undefined") return 0;
    const h = (window as Window & { visualViewport?: { height: number } }).visualViewport?.height ?? window.innerHeight;
    const w = window.innerWidth;
    let pct: number;
    if (w <= SMALL_PHONE_CARD_TOP_BREAKPOINT) {
      pct = SMALL_PHONE_CARD_TOP_MIN + (w - 320) * (SMALL_PHONE_CARD_TOP_MAX - SMALL_PHONE_CARD_TOP_MIN) / 70;
    } else {
      pct = h < MOBILE_CARD_TOP_VIEWPORT_BREAKPOINT ? MOBILE_CARD_TOP_SHORT : MOBILE_CARD_TOP_TALL;
    }
    return Math.round((pct / 100) * h);
  }, []);

  const handleClose = () => setVisible(false);

  return (
    <>
      <style>{`
        @keyframes sarah-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        .banner-cta-button, .sarah-cta-button {
          transition: transform 0.2s ease;
        }
        .banner-cta-button:hover, .sarah-cta-button:hover {
          transform: scale(1.05);
        }
        @media (max-width: 640px) {
          .sarah-card-desktop { display: none !important; }
          .sarah-card-mobile svg:not(.sarah-arrow-icon) { transform: scale(1.05); }
          .sarah-desktop-banner { display: none !important; }
        }
        @media (min-width: 641px) {
          .sarah-card-mobile { display: none !important; }
          .sarah-mobile-banner { display: none !important; }
        }
        @media (max-width: ${SMALL_PHONE_BREAKPOINT}) {
          .sarah-mobile-banner .banner-cta-wrapper { padding-right: ${SMALL_PHONE_GHL_SAFE_ZONE} !important; box-sizing: border-box !important; width: 100% !important; }
          .sarah-mobile-banner .banner-cta-wrapper .banner-cta-button { min-width: 0 !important; max-width: 100% !important; width: 100% !important; }
          .sarah-mobile-banner .banner-headline { transform: translateY(-4px) !important; }
          .sarah-mobile-banner .banner-headline span { font-size: 18.06px !important; }
          .sarah-mobile-banner .banner-disclaimer { font-size: 9px !important; }
          .sarah-card-mobile .sarah-mobile-cta-group { display: flex !important; flex-direction: column !important; align-items: center !important; padding-right: ${SMALL_PHONE_CTA_GROUP_PADDING_RIGHT} !important; }
          .sarah-card-mobile .sarah-mobile-cta-group .sarah-talk-block { margin-left: 0 !important; margin-right: 0 !important; }
          .sarah-card-mobile .sarah-mobile-cta-group .sarah-cta-button { margin-left: 0 !important; margin-right: 0 !important; min-width: 0 !important; max-width: 100% !important; }
        }
      `}</style>
      {visible && (
        <>
      {/* Desktop: full card */}
      <div
        id="sarah-card"
        className="sarah-card sarah-card-desktop"
        style={{
          position: "fixed",
          bottom: DESKTOP_CARD_HEIGHT ? `calc(${DESKTOP_CARD_BOTTOM} - ${DESKTOP_CARD_BOTTOM_TRIM})` : DESKTOP_CARD_BOTTOM,
          right: DESKTOP_CARD_RIGHT,
          width: DESKTOP_CARD_WIDTH,
          ...(DESKTOP_CARD_HEIGHT ? { height: `calc(${DESKTOP_CARD_HEIGHT} + ${DESKTOP_CARD_BOTTOM_TRIM})` } : { minHeight: DESKTOP_CARD_MIN_HEIGHT }),
          background: "#0f2d1f",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "17.3px",
          padding: `${DESKTOP_CARD_PADDING_V} ${DESKTOP_CARD_PADDING_H} ${DESKTOP_CARD_PADDING_BOTTOM} ${DESKTOP_CARD_PADDING_H}`,
          fontFamily: "'Montserrat', sans-serif",
          zIndex: 999,
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        <button
          type="button"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10.82px",
            right: "12.98px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            fontSize: "26.73px",
            cursor: "pointer",
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
        >
          ×
        </button>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6.49px",
            background: "rgba(232, 98, 10, 0.33)",
            border: "1px solid rgba(232, 98, 10, 0.54)",
            borderRadius: "100px",
            padding: "4.33px 10.82px",
            marginBottom: "12.98px",
          }}
        >
          <span
            style={{
              width: "5.41px",
              height: "5.41px",
              background: "#ff9542",
              borderRadius: "50%",
              display: "inline-block",
              animation: "sarah-pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#fff5e8",
              fontSize: "10.03px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textShadow: TEXT_OUTLINE_SHADOW,
            }}
          >
            Live · Available 24/7
          </span>
        </div>

        <div
          style={{
            color: "#FFFFFF",
            fontSize: "16.71px",
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: "12.98px",
            letterSpacing: "-0.01em",
            textShadow: TEXT_OUTLINE_SHADOW,
          }}
        >
          Your phone rings at 11pm.
          <br />
          <span style={{ color: "#e8620a", textShadow: TEXT_OUTLINE_SHADOW }}>Sarah answers.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8.65px", marginBottom: "17.3px" }}>
          {BULLET_ITEMS.map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "8.65px" }}>
              <CheckIcon />
              <span style={{ color: "#FFFFFF", fontSize: "13.37px", fontWeight: 600 }}>{text}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255, 255, 255, 0.18)",
            marginBottom: DESKTOP_SECTION_MARGIN,
            marginRight: DESKTOP_DIVIDER_MARGIN_RIGHT,
          }}
        />

        <TalkToSarahBlock
          fontSize={DESKTOP_TALK_FONT_SIZE}
          arrowSize={DESKTOP_ARROW_SIZE}
          inline
          inlineMarginLeft={DESKTOP_TALK_MARGIN_LEFT}
          inlineMarginTop={DESKTOP_TALK_MARGIN_TOP}
          inlineMarginBottom={DESKTOP_SECTION_MARGIN}
        />
        <CTALink fontSize={DESKTOP_CTA_FONT_SIZE} marginBottom={DESKTOP_SECTION_MARGIN} marginLeft={DESKTOP_CTA_MARGIN_LEFT} translateY={DESKTOP_CTA_BUTTON_OFFSET_Y} />
      </div>

      {/* Mobile: compact card centered on screen + arrow to GHL call button (portal to body so it stays fixed when scrolling) */}
      {createPortal(
        <div
          className="sarah-card sarah-card-mobile"
          style={{
            position: "fixed",
            top: `${mobileCardTopPx}px`,
            left: MOBILE_CARD_LEFT,
            transform: MOBILE_CARD_TRANSFORM,
            width: MOBILE_CARD_WIDTH,
            minHeight: MOBILE_CARD_MIN_HEIGHT,
            background: "#0f2d1f",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14.31px",
            padding: `${MOBILE_CARD_PADDING_V} ${MOBILE_CARD_PADDING_H} ${MOBILE_CARD_PADDING_BOTTOM} ${MOBILE_CARD_PADDING_H}`,
            fontFamily: "'Montserrat', sans-serif",
            zIndex: 999,
            boxShadow: "0 6.3px 25.2px rgba(0,0,0,0.35)",
          }}
      >
        <button
          type="button"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "9.53px",
            right: "11.93px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            fontSize: "29.48px",
            cursor: "pointer",
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
        >
          ×
        </button>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "5.25px", background: "rgba(232,98,10,0.33)", border: "1px solid rgba(232,98,10,0.54)", borderRadius: "100px", padding: "2.64px 10.53px", marginBottom: "9.83px", transform: `translateY(${MOBILE_BADGE_OFFSET_Y})` }}>
          <span style={{ width: "5.25px", height: "5.25px", background: "#ff9542", borderRadius: "50%", display: "inline-block", animation: "sarah-pulse 2s infinite" }} />
          <span style={{ color: "#fff5e8", fontSize: "10.85px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textShadow: TEXT_OUTLINE_SHADOW }}>Live · Available 24/7</span>
        </div>
        <div style={{ color: "#fff", fontSize: "15.5px", fontWeight: 800, lineHeight: 1.25, marginBottom: "9.53px", letterSpacing: "-0.01em", textShadow: TEXT_OUTLINE_SHADOW }}>
          Your phone rings at 11pm.
          <br />
          <span style={{ color: "#e8620a", marginLeft: MOBILE_PHRASE_GAP, marginTop: MOBILE_PHRASE_GAP_VERTICAL, display: "inline-block", textShadow: TEXT_OUTLINE_SHADOW }}>Sarah answers.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5.96px", marginBottom: "9.53px", paddingRight: "28.62px" }}>
          {BULLET_ITEMS.map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "7.15px" }}>
              <CheckIcon />
              <span style={{ color: "#FFFFFF", fontSize: "13.51px", fontWeight: 600 }}>{text}</span>
            </div>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: MOBILE_SECTION_MARGIN, width: MOBILE_DIVIDER_WIDTH }} />
        <div className="sarah-mobile-cta-group">
        <TalkToSarahBlock
          fontSize={MOBILE_TALK_FONT_SIZE}
          arrowSize={MOBILE_ARROW_SIZE}
          inline
        />
        <CTALink fontSize={MOBILE_CTA_FONT_SIZE} marginBottom={MOBILE_CARD_BOTTOM_TRIM} marginLeft={TALK_MARGIN_LEFT} translateY={MOBILE_CTA_BUTTON_OFFSET_Y} />
        </div>
      </div>,
        document.body
      )}
        </>
      )}
      {!visible && createPortal(
        <>
          <MobileBanner />
          <DesktopBanner />
        </>,
        document.body
      )}
    </>
  );
};

export default ChatWidgetSection;
