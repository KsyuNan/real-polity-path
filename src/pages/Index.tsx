import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import CourseContentSection from "@/components/CourseContentSection";
import CoursePlanSection from "@/components/CoursePlanSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import RegistrationForm from "@/components/RegistrationForm";
import PaymentSection from "@/components/PaymentSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FounderSection />
        <CourseContentSection />
        <CoursePlanSection />
        <FAQSection />
        <PricingSection />
        <RegistrationForm />
        <PaymentSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
