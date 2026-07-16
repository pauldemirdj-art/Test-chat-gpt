import Header from './components/Header';
import Hero from './components/Hero';
import Listings from './components/Listings';
import HowItWorks from './components/HowItWorks';
import Advantages from './components/Advantages';
import LeadForm from './components/LeadForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Header />
      <main>
        <Hero />
        <Listings />
        <HowItWorks />
        <Advantages />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
