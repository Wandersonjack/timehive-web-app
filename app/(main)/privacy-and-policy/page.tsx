import React, { Suspense } from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p>
          Effective Date: 02 Aug 2024 1. Introduction Welcome to TimeHive (“we,”
          “our,” “us”). This Privacy Policy explains how we collect, use,
          disclose, and protect your personal information when you use our
          Pomodoro timer app (the “App”). By using the App, you consent to the
          practices described in this Privacy Policy. 2. Information We Collect
          • Personal Information: When you create an account or use the App, we
          may collect personal information such as your name, email address, and
          any other information you provide voluntarily. • Usage Data: We
          collect information about your use of the App, including your
          interactions, preferences, and activity data, such as time spent using
          the App and features accessed. • Device Information: We may collect
          information about the device you use to access the App, including
          device type, operating system, and IP address. 3. How We Use Your
          Information We use your information for the following purposes: • To
          Provide and Improve the App: To operate, maintain, and improve the App
          and its features. • To Communicate: To send you updates,
          notifications, and other communications related to the App. • To
          Personalize Experience: To tailor the App to your preferences and
          enhance your user experience. • For Analytics: To analyze usage
          patterns and gather insights to improve the App’s performance and
          functionality. • For Legal Compliance: To comply with legal
          obligations, resolve disputes, and enforce our agreements. 4. Sharing
          Your Information We do not sell, trade, or rent your personal
          information to third parties. We may share your information in the
          following circumstances: • Service Providers: We may share information
          with third-party service providers who assist us in operating the App
          and providing services, such as hosting and analytics. • Legal
          Requirements: We may disclose your information if required by law or
          in response to legal requests, such as subpoenas or court orders. •
          Business Transfers: In the event of a merger, acquisition, or other
          business reorganization, your information may be transferred as part
          of the transaction. 5. Data Security We implement reasonable security
          measures to protect your information from unauthorized access,
          disclosure, alteration, and destruction. However, no security measures
          are completely foolproof, and we cannot guarantee the absolute
          security of your information. 6. Your Choices • Access and Update: You
          can access and update your personal information by logging into your
          account and making changes as needed. • Opt-Out: You may opt out of
          receiving promotional communications from us by following the
          instructions provided in those communications. However, we may still
          send you non-promotional messages related to your use of the App. 7.
          Children’s Privacy The App is not intended for children under the age
          of 13. We do not knowingly collect personal information from children
          under 13. If we become aware that we have collected such information,
          we will take steps to delete it. 8. International Data Transfers Your
          information may be transferred to and processed in countries other
          than your own, including countries that may not have the same level of
          data protection as your home country. By using the App, you consent to
          the transfer of your information to these countries. 9. Changes to
          This Privacy Policy We may update this Privacy Policy from time to
          time. We will notify you of any significant changes by posting the new
          Privacy Policy on our website or within the App. Your continued use of
          the App after any changes constitutes your acceptance of the revised
          Privacy Policy. 10. Contact Us If you have any questions or concerns
          about this Privacy Policy, please contact us at: • Email:
          narius.design@gmail.com • Address: Uus-tatari 16. Links to Other Sites
          The App may contain links to third-party websites or services. We are
          not responsible for the privacy practices or content of such third
          parties. Please review their privacy policies before providing any
          information. 12. Data Retention We will retain your personal
          information for as long as necessary to fulfill the purposes outlined
          in this Privacy Policy, comply with legal obligations, and enforce our
          agreements.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default function WrappedPrivacyPolicy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
