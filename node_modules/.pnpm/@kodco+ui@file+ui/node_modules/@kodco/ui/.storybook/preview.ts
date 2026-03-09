// Import all blocks for Storybook
import "../src/blocks/page-hero";
import "../src/blocks/intro-block";
import "../src/blocks/service-block";
import "../src/blocks/feature-block";
import "../src/blocks/testimonial-block";
import "../src/blocks/cta-section";
import "../src/blocks/site-header";
import "../src/blocks/site-footer";
import "../src/blocks/case-block";
import "../src/blocks/content-block";
import "../src/blocks/icon-grid";
import "../src/blocks/team-block";
import "../src/blocks/pricing-block";
import "../src/blocks/faq-block";
import "../src/blocks/logo-showcase";
import "../src/blocks/stats-block";
import "../src/blocks/contact-block";
import "../src/blocks/video-block";
import "../src/blocks/image-gallery";
import "../src/blocks/newsletter-signup";
import "../src/blocks/map-block";
import "../src/blocks/timeline-block";
import "../src/blocks/about-hero-block";
import "../src/blocks/content-image-section";
import "../src/blocks/schedule-block";
import "../src/blocks/process-block";
import "../src/blocks/social-proof-bar";

// Import all components for Storybook
import "../src/components/ui-button";
import "../src/components/ui-card";
import "../src/components/ui-modal";
import "../src/components/ui-spinner";
import "../src/components/ui-tooltip";
import "../src/components/ui-badge";
import "../src/components/ui-divider";
import "../src/components/ui-avatar";
import "../src/components/ui-input";
import "../src/components/ui-textarea";
import "../src/components/ui-select";
import "../src/components/ui-checkbox";
import "../src/components/ui-radio";
import "../src/components/ui-toggle";
import "../src/components/ui-breadcrumbs";
import "../src/components/ui-tabs";
import "../src/components/ui-accordion";
import "../src/components/ui-alert";
import "../src/components/ui-progress";
import "../src/components/ui-container";
import "../src/components/ui-grid";
import "../src/components/ui-theme-switcher";
import "../src/components/ui-image-upload";

// Import theme CSS
import "../src/themes/theme.css";
import "../src/themes/presets.css";

export const parameters = {
  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: "todo"
  }
};