// /frontend/src/pages/Home.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import EnquiryForm from "../components/EnquiryForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
