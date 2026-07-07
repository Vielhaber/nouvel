import React, { useState } from 'react';
import { 
  Flame, 
  ChevronRight, 
  Menu, 
  X, 
  Check, 
  Download, 
  Calculator, 
  Leaf, 
  TrendingUp, 
  Wine, 
  Truck, 
  Package, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ROI Calculator States
  const [numHeaters, setNumHeaters] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(30);
  const [priceGas, setPriceGas] = useState(1.80);
  const [pricePellets, setPricePellets] = useState(0.40);

  // Lead Form States
  const [formStep, setFormStep] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [orderVolume, setOrderVolume] = useState('');
  const [preferredModel, setPreferredModel] = useState('all');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCountry, setContactCountry] = useState('');
  const [contactNotes, setContactNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculation Constants
  const GAS_CONSUMPTION_KG_H = 0.8;
  const PELLET_CONSUMPTION_KG_H = 1.0;
  const GAS_CO2_EMISSION_FACTOR = 3.0; // kg CO2 / kg gas
  const PELLET_INVESTMENT_PREMIUM = 300.0; // average premium cost per heater

  // Operating Costs Math
  const gasHourlyCost = GAS_CONSUMPTION_KG_H * priceGas;
  const pelletHourlyCost = PELLET_CONSUMPTION_KG_H * pricePellets;
  const weeklyGasCost = numHeaters * hoursPerWeek * gasHourlyCost;
  const weeklyPelletCost = numHeaters * hoursPerWeek * pelletHourlyCost;
  const weeklySavings = weeklyGasCost - weeklyPelletCost;
  const annualSavings = weeklySavings * weeksPerYear;

  // ESG Math
  const annualGasCo2 = numHeaters * hoursPerWeek * weeksPerYear * GAS_CONSUMPTION_KG_H * GAS_CO2_EMISSION_FACTOR;
  const co2SavingsTons = annualGasCo2 / 1000;

  // Energy output yield based on 4.9 kW/kg pellet yield
  const weeklyEnergyYieldKwh = numHeaters * hoursPerWeek * PELLET_CONSUMPTION_KG_H * 4.9;

  // Payback period
  const totalInvestmentPremium = numHeaters * PELLET_INVESTMENT_PREMIUM;
  const monthlySavings = (annualSavings / weeksPerYear) * 4.33;
  const paybackMonths = weeklySavings > 0 ? (totalInvestmentPremium / monthlySavings) : 0;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (companyName && industry && orderVolume) {
      setFormStep(2);
    } else {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
    }
  };

  const handlePrevStep = () => {
    setFormStep(1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (contactName && contactEmail && contactPhone && contactCountry) {
      setFormSubmitted(true);
    } else {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
    }
  };

  const handleFormReset = () => {
    setCompanyName('');
    setIndustry('');
    setOrderVolume('');
    setPreferredModel('all');
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setContactCountry('');
    setContactNotes('');
    setFormStep(1);
    setFormSubmitted(false);
  };

  const selectPreferredModel = (modelName) => {
    setPreferredModel(modelName);
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased text-white bg-brand-dark selection:bg-brand-amber selection:text-brand-black">
      
      {/* Background Amber Glow Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,159,0,0.06)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>
      <div className="absolute top-[1800px] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,159,0,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      <div className="absolute top-[3200px] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,159,0,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-dark/80 border-b border-brand-gray/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-amber to-orange-500 flex items-center justify-center shadow-glow-amber">
              <Flame className="w-6 h-6 text-brand-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">NOUVEL</span>
              <span className="text-xs block text-brand-amber font-mono font-bold tracking-widest uppercase">Commercial Line</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#models" className="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">Modelle</a>
            <a href="#calculator" className="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">ROI-Rechner</a>
            <a href="#charts" className="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">Wirtschaftlichkeit</a>
            <a href="#specs" className="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">Logistik & Specs</a>
            <a href="#advantages" class="text-sm font-medium text-gray-300 hover:text-brand-amber transition-colors">B2B Vorteile</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#lead-form" className="hidden sm:inline-flex items-center justify-center px-5 h-11 text-sm font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded-lg transition-all duration-200 shadow-glow-amber hover:shadow-glow-amber-strong">
              Händler-Anfrage
              <ChevronRight className="w-4 h-4 ml-1.5 stroke-[3]" />
            </a>
            <button className="md:hidden text-white hover:text-brand-amber transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-gray bg-brand-dark px-4 py-6 flex flex-col gap-4">
            <a href="#models" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-amber py-2 transition-colors">Modelle</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-amber py-2 transition-colors">ROI-Rechner</a>
            <a href="#charts" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-amber py-2 transition-colors">Wirtschaftlichkeit</a>
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-amber py-2 transition-colors">Logistik & Specs</a>
            <a href="#advantages" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-amber py-2 transition-colors">B2B Vorteile</a>
            <a href="#lead-form" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center px-5 h-12 text-sm font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded-lg shadow-glow-amber transition-all">
              Händler-Anfrage
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 blueprint-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Händler-Direktkonditionen • Ex-Works</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
                Die rentable Alternative zu Gas: <span className="bg-gradient-to-r from-brand-amber to-orange-500 bg-clip-text text-transparent">Premium Pellet-Heizstrahler</span> für Gewerbe & Großhandel.
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Senken Sie Ihre Betriebskosten im Außenbereich drastisch. CO2-neutral, wartungsarm und sekundenschnell betriebsbereit. Ex-Works Konditionen für Händler, Gastronomie und Großabnehmer ab Werk Triengen/Schweiz.
              </p>

              {/* B2B Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-brand-gray py-6">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Bis zu 70% Sparen</h4>
                    <p class="text-xs text-gray-400">Verglichen mit Propangasbetrieb</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">100% CO2-neutral</h4>
                    <p class="text-xs text-gray-400">Erfüllt ESG-Nachhaltigkeitsziele</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Wartungsarm</h4>
                    <p class="text-xs text-gray-400">Kein Schleppen von Gasflaschen</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-form" className="inline-flex items-center justify-center px-8 h-14 text-base font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded-lg transition-all shadow-glow-amber hover:shadow-glow-amber-strong text-center">
                  Händler-Preisliste & Palettenkonditionen
                </a>
                <a href="#specs" className="inline-flex items-center justify-center px-6 h-14 text-base font-bold text-white bg-transparent hover:bg-white/5 rounded-lg border border-brand-steel transition-all text-center">
                  Technische Blätter (PDF)
                  <Download className="w-4 h-4 ml-2 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Hero Blueprint Right Panel */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-brand-black/60 backdrop-blur-md rounded-2xl border border-brand-gray p-6 sm:p-8 shadow-xl shadow-black/80 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand-amber/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-brand-gray pb-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Nouvel Portfolio Specs</h3>
                    <p className="text-xs text-brand-amber font-mono">PRODUCT SPECIFICATION BLUESHEET</p>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-brand-gray">4.9 kW/kg Yield</span>
                </div>

                {/* Blueprint List of Heaters */}
                <div className="flex flex-col gap-4">
                  {[
                    { key: 'VIC', name: 'Victoria', art: 'Art. 404834', type: 'Stand-Heizstrahler', uvp: '€399.00', units: '10/Palette' },
                    { key: 'SAM', name: 'Samutu', art: 'Art. 404832', type: 'Fan System (12h)', uvp: '€699.00', units: '4/Palette' },
                    { key: 'BON', name: 'Bonita', art: 'Art. 404833', type: 'Square Fan System', uvp: '€699.00', units: '8/Palette' },
                    { key: 'LAN', name: 'Lanterna', art: 'Art. 405446', type: 'Tisch-Modell', uvp: '€149.00', units: '20/Palette' },
                  ].map((model) => (
                    <div key={model.key} className="group relative flex items-center justify-between p-3.5 rounded-lg bg-[#181818]/40 border border-brand-gray/50 hover:border-brand-amber/30 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-brand-dark border border-brand-gray flex items-center justify-center text-brand-amber font-mono font-bold text-sm">{model.key}</div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{model.name}</h4>
                          <p className="text-xs text-gray-400">{model.art} • {model.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono block text-gray-400">UVP {model.uvp}</span>
                        <span className="text-xs font-semibold text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded">{model.units}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gray flex justify-between items-center text-xs font-mono text-gray-500">
                  <span>EX-WORKS BASIS TRIENGEN (CH)</span>
                  <span className="text-brand-amber font-semibold">Ready to Ship</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Models Overview Gallery */}
      <section id="models" className="py-24 border-t border-brand-gray bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Das Nouvel Outdoor-Sortiment</h2>
            <p className="text-gray-400">Vier spezialisierte Ausführungen für unterschiedliche Ansprüche im gewerblichen Bereich – vom kompakten Tischfeuer bis hin zum vollgebläsetauglichen Großraumstrahler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Victoria', art: 'Art. 404834', type: 'Säulen-Modell',
                desc: 'Ein eleganter Stand-Heizstrahler mit 95 cm Bauhöhe. Der ideale Begleiter für Terrassenzonen und Gastro-Eingänge.',
                weight: '11.9 kg', cons: '1.0 kg/h', dims: '20 x 20 x 95 cm', uvp: '€399.00',
                hCode: 'VIC', hColor: 'from-brand-amber/80 to-brand-gray', height: 'h-36'
              },
              { 
                name: 'Samutu', art: 'Art. 404832', type: 'Ventilator-Premium-Modell',
                desc: 'Inklusive regelbarem Ventilator zur stufenlosen Hitzesteuerung und einer Powerbank (12h). Maximale Mobilität durch Transportrollen.',
                weight: '26.0 kg', cons: '1.17 kg/h', dims: '30 x 30 x 146 cm', uvp: '€699.00',
                hCode: 'SAM', hColor: 'from-brand-amber/80 via-brand-gray to-[#1a1a1a]', height: 'h-40'
              },
              { 
                name: 'Bonita', art: 'Art. 404833', type: 'Eckiges Premium-Modell',
                desc: 'Eckige Variante des Samutu mit regelbarem Ventilator und langlebiger Powerbank. Hervorragende Wärmeabstrahlung und Standfestigkeit.',
                weight: '33.5 kg', cons: '1.17 kg/h', dims: '35.5 x 35.5 x 137 cm', uvp: '€699.00',
                hCode: 'BON', hColor: 'from-brand-amber/80 via-brand-gray to-brand-black', height: 'h-38'
              },
              { 
                name: 'Lanterna', art: 'Art. 405446', type: 'Tisch-Modell',
                desc: 'Ein kompaktes Tischmodell für das stimmungsvolle Ambiente. Geruchs- & raucharm, perfekt für Loungebereiche und Tische.',
                weight: '4.5 kg', cons: 'ca. 0.5 kg/h', dims: '24 x 24 x 59 cm', uvp: '€149.00',
                hCode: 'LAN', hColor: 'from-brand-amber/60 to-brand-gray', height: 'h-28'
              }
            ].map((model) => (
              <div key={model.name} className="group bg-brand-dark/40 border border-brand-gray hover:border-brand-amber/40 rounded-xl overflow-hidden shadow-lg hover:shadow-glow-amber transition-all duration-300 flex flex-col justify-between">
                <div className="p-6 relative">
                  <div className="absolute top-4 right-4 text-xs font-mono bg-white/5 border border-brand-gray px-2.5 py-1 rounded text-gray-400">{model.art}</div>
                  <div className="h-44 flex items-center justify-center mb-6 bg-[radial-gradient(circle_at_center,#1d1d1d_0%,#0c0c0c_80%)] rounded-lg border border-brand-gray/50 relative overflow-hidden group-hover:border-brand-amber/20 transition-colors">
                    {/* Visual representation container */}
                    <div className={`w-10 ${model.height} bg-gradient-to-b ${model.hColor} rounded-t relative flex flex-col justify-between items-center py-2 shadow-inner border border-white/5`}>
                      <div className="w-8 h-8 bg-brand-amber/25 rounded-full animate-pulse flex items-center justify-center border border-brand-amber/30">
                        <Flame className="w-4 h-4 text-brand-amber" />
                      </div>
                      <div className="w-3 h-10 bg-brand-black/40 rounded"></div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">{model.name}</h3>
                  <p className="text-xs text-brand-amber font-mono mb-4 uppercase tracking-widest">{model.type}</p>
                  <p className="text-sm text-gray-400 mb-6">{model.desc}</p>
                  <ul className="text-xs text-gray-500 font-mono space-y-2 border-t border-brand-gray/50 pt-4">
                    <li className="flex justify-between"><span>Gewicht:</span> <span className="text-white">{model.weight}</span></li>
                    <li className="flex justify-between"><span>Verbrauch:</span> <span className="text-white">{model.cons}</span></li>
                    <li className="flex justify-between"><span>Maße:</span> <span class="text-white">{model.dims}</span></li>
                    <li className="flex justify-between"><span>UVP:</span> <span className="text-brand-amber font-bold">{model.uvp}</span></li>
                  </ul>
                </div>
                <div className="p-6 border-t border-brand-gray/50 bg-[#151515]/20">
                  <button onClick={() => selectPreferredModel(model.name)} className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white bg-transparent border border-brand-steel hover:bg-brand-amber hover:text-brand-black hover:border-brand-amber rounded transition-all text-center uppercase tracking-wider">
                    Angebot anfordern
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Calculator Section */}
      <section id="calculator" className="py-24 border-t border-brand-gray bg-brand-dark/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Gewerbliche Kalkulation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Betriebskosten & ROI Rechner</h2>
            <p className="text-gray-400">Vergleichen Sie die Betriebskosten von herkömmlichen Flüssiggas-Heizstrahlern direkt mit den Nouvel Holzpellet-Strahlern. Geben Sie Ihre Parameter ein und sehen Sie Ihre Ersparnis live.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Inputs Card */}
            <div className="lg:col-span-6 bg-brand-black border border-brand-gray rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-display font-bold text-xl text-white pb-3 border-b border-brand-gray">1. Betriebsparameter definieren</h3>
                
                {/* Number of heaters */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-300">Anzahl Heizstrahler im Betrieb</label>
                    <span className="text-sm font-bold text-brand-amber font-mono">{numHeaters} Stück</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" value={numHeaters} 
                    onChange={(e) => setNumHeaters(parseInt(e.target.value))} 
                    className="w-full accent-brand-amber bg-brand-gray h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Operating hours */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-300">Betriebsstunden pro Woche (je Strahler)</label>
                    <span className="text-sm font-bold text-brand-amber font-mono">{hoursPerWeek} Std.</span>
                  </div>
                  <input 
                    type="range" min="5" max="80" value={hoursPerWeek} 
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))} 
                    className="w-full accent-brand-amber bg-brand-gray h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Weeks per year */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-gray-300">Betriebswochen pro Jahr (Saison)</label>
                    <span className="text-sm font-bold text-brand-amber font-mono">{weeksPerYear} Wochen</span>
                  </div>
                  <input 
                    type="range" min="10" max="52" value={weeksPerYear} 
                    onChange={(e) => setWeeksPerYear(parseInt(e.target.value))} 
                    className="w-full accent-brand-amber bg-brand-gray h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Price configs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-gray">
                  {/* Gas cost */}
                  <div className="space-y-2">
                    <div class="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gas-Preis (€ / kg)</label>
                      <span className="text-xs font-mono font-bold text-brand-amber">€{priceGas.toFixed(2)}/kg</span>
                    </div>
                    <input 
                      type="range" min="1.00" max="3.50" step="0.10" value={priceGas} 
                      onChange={(e) => setPriceGas(parseFloat(e.target.value))} 
                      className="w-full accent-brand-amber bg-brand-gray h-1.5 rounded-lg cursor-pointer"
                    />
                    <p className="text-[10px] text-gray-500">Ø Gewerblicher Propangas-Preis</p>
                  </div>

                  {/* Pellet cost */}
                  <div className="space-y-2">
                    <div class="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pellet-Preis (€ / kg)</label>
                      <span className="text-xs font-mono font-bold text-brand-amber">€{pricePellets.toFixed(2)}/kg</span>
                    </div>
                    <input 
                      type="range" min="0.20" max="1.00" step="0.05" value={pricePellets} 
                      onChange={(e) => setPricePellets(parseFloat(e.target.value))} 
                      className="w-full accent-brand-amber bg-brand-gray h-1.5 rounded-lg cursor-pointer"
                    />
                    <p className="text-[10px] text-gray-500">Ø Holzpellet Sackware / Palette</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-gray text-[11px] font-mono text-gray-500 flex justify-between">
                <span>Kalkulation basiert auf:</span>
                <span>Verbrauch Gas (0.8 kg/h) vs Pellet (1.0 kg/h)</span>
              </div>
            </div>

            {/* Right Outputs Card */}
            <div className="lg:col-span-6 bg-[#161616] border border-brand-gray rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-amber/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-xl text-white pb-3 border-b border-brand-gray flex items-center justify-between">
                  <span>2. Ersparnis & ROI Metriken</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-amber/10 text-brand-amber animate-pulse font-bold">Echtzeit-Berechnung</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Weekly savings */}
                  <div className="bg-brand-black/50 border border-brand-gray/60 p-4 rounded-xl relative overflow-hidden">
                    <span className="text-xs text-gray-400 font-medium block">Ersparnis pro Woche</span>
                    <span className="text-3xl font-display font-black text-brand-amber font-mono mt-1 block">
                      {formatCurrency(weeklySavings)}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1 block">Bei definiertem Wochenbetrieb</span>
                  </div>

                  {/* Annual savings */}
                  <div className="bg-brand-black/50 border border-brand-amber/30 p-4 rounded-xl relative overflow-hidden shadow-glow-amber">
                    <span class="text-xs text-gray-300 font-semibold block">Jährliche Ersparnis (Saison)</span>
                    <span className="text-4xl font-display font-black text-brand-amber font-mono mt-1 block bg-gradient-to-r from-brand-amber to-amber-300 bg-clip-text text-transparent">
                      {formatCurrency(annualSavings)}
                    </span>
                    <span class="text-[10px] text-gray-400 font-mono mt-1 block font-bold">Amortisiert sich in Rekordzeit</span>
                  </div>

                  {/* CO2 Footprint */}
                  <div className="bg-brand-black/50 border border-brand-gray/60 p-4 rounded-xl relative overflow-hidden">
                    <span className="text-xs text-gray-400 font-medium block flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-green-500" /> CO₂-Reduktion / Jahr
                    </span>
                    <span className="text-2xl font-display font-bold text-green-500 font-mono mt-1 block">
                      {co2SavingsTons.toFixed(1)} t
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1 block">vs. Flüssiggas-Emissionen</span>
                  </div>

                  {/* ROI Months */}
                  <div className="bg-brand-black/50 border border-brand-gray/60 p-4 rounded-xl relative overflow-hidden">
                    <span className="text-xs text-gray-400 font-medium block">Amortisationszeit (ROI)</span>
                    <span className="text-2xl font-display font-bold text-white font-mono mt-1 block">
                      {weeklySavings <= 0 ? "Keine Amortisation" : `${paybackMonths.toFixed(1)} ${paybackMonths === 1 ? 'Monat' : 'Monate'}`}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1 block">Nutzungsmonate im Betrieb</span>
                  </div>
                </div>

                <div className="bg-brand-black/30 border border-brand-gray p-4 rounded-xl">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span>Gesamtenergieertrag pro Woche:</span>
                    <span className="text-white font-bold">{Math.round(weeklyEnergyYieldKwh).toLocaleString('de-DE')} kWh</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Basierend auf der hocheffizienten Nennwärmeleistung von 4.9 kW pro kg Pellet-Durchsatz.</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-gray flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-xs text-white font-bold">Sofort finanzielle Vorteile sichern.</p>
                  <p className="text-[10px] text-gray-400">Nutzen Sie unsere Großabnehmer- und Palettenkonditionen.</p>
                </div>
                <a href="#lead-form" className="w-full sm:w-auto inline-flex items-center justify-center px-5 h-11 text-xs font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded transition-all tracking-wider uppercase">
                  Angebot erhalten
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive B2B Charts (Cost / CO2) */}
      <section id="charts" className="py-24 border-t border-brand-gray bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mb-4">
              <TrendingUp className="w-4 h-4" />
              <span class="text-xs font-mono font-bold uppercase tracking-wider">ESG- & Finanzanalyse</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Wirtschaftlichkeit im Fokus</h2>
            <p className="text-gray-400">Visualisierung der direkten Ersparnis und der ESG-relevanten CO2-Minderung für Ihr Firmen-Audit und Reporting.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Cost Comparison Graphic */}
            <div className="bg-brand-dark/60 border border-brand-gray rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-white">Betriebskosten pro Stunde: Gas vs. Holzpellet</h3>
                <p className="text-xs text-gray-400">Direkter Kostenvergleich je Betriebsstunde bei ausgewählten Preisen (€)</p>
              </div>

              {/* Pure CSS Bar Chart Graphic */}
              <div className="space-y-6 py-6">
                {/* Gas row */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                    <span>Propangas ({GAS_CONSUMPTION_KG_H} kg/h @ €{priceGas.toFixed(2)}/kg)</span>
                    <span className="text-white font-bold">{formatCurrency(gasHourlyCost)} / h</span>
                  </div>
                  <div className="w-full bg-[#181818] h-8 rounded border border-brand-gray overflow-hidden">
                    <div 
                      className="bg-brand-steel h-full transition-all duration-500 ease-out border-r border-[#444]" 
                      style={{ width: `${Math.min(100, (gasHourlyCost / Math.max(gasHourlyCost, pelletHourlyCost)) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Pellet row */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                    <span className="text-brand-amber font-semibold">Nouvel Holzpellets ({PELLET_CONSUMPTION_KG_H} kg/h @ €{pricePellets.toFixed(2)}/kg)</span>
                    <span className="text-brand-amber font-bold">{formatCurrency(pelletHourlyCost)} / h</span>
                  </div>
                  <div className="w-full bg-[#181818] h-8 rounded border border-brand-gray overflow-hidden">
                    <div 
                      className="bg-brand-amber h-full transition-all duration-500 ease-out shadow-glow-amber border-r border-amber-300" 
                      style={{ width: `${Math.min(100, (pelletHourlyCost / Math.max(gasHourlyCost, pelletHourlyCost)) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-mono mt-4 pt-4 border-t border-brand-gray">
                Ersparnis pro Betriebsstunde und Gerät: <span className="text-brand-amber font-bold">{formatCurrency(gasHourlyCost - pelletHourlyCost)}</span>
              </div>
            </div>

            {/* CO2 Emissions Graphic */}
            <div className="bg-brand-dark/60 border border-brand-gray rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-white">CO₂-Ausstoß pro Jahr (Saison)</h3>
                <p className="text-xs text-gray-400">Geschätzte jährliche CO₂-Emissionen in Tonnen (für {numHeaters} Strahler)</p>
              </div>

              {/* Pure CSS Bar Chart Graphic */}
              <div className="space-y-6 py-6">
                {/* Gas row */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                    <span>Propangas-Heizstrahler</span>
                    <span className="text-red-500 font-bold">{co2SavingsTons.toFixed(2)} Tonnen CO₂</span>
                  </div>
                  <div className="w-full bg-[#181818] h-8 rounded border border-brand-gray overflow-hidden">
                    <div 
                      className="bg-red-600 h-full transition-all duration-500 ease-out" 
                      style={{ width: co2SavingsTons > 0 ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Pellet row */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                    <span className="text-green-500 font-semibold">Nouvel Pellet-Heizstrahler</span>
                    <span className="text-green-500 font-bold">0.00 Tonnen CO₂ (bilanziell neutral)</span>
                  </div>
                  <div className="w-full bg-[#181818] h-8 rounded border border-brand-gray overflow-hidden">
                    <div 
                      className="bg-green-500 h-full transition-all duration-500 ease-out shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)]" 
                      style={{ width: '2%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-mono mt-4 pt-4 border-t border-brand-gray">
                Vermiedene CO₂-Abgaben sichern ESG Konformität im Gastronomie- und Eventbereich.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics specs comparison matrix */}
      <section id="specs" className="py-24 border-t border-brand-gray bg-brand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mb-4">
              <Package className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Logistische Stammdaten</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Paletten- & Daten-Tabelle</h2>
            <p className="text-gray-400">Vergleichen Sie die technischen Parameter und Verpackungseinheiten direkt für Ihre Transportplanung.</p>
          </div>

          <div className="overflow-x-auto border border-brand-gray rounded-xl bg-brand-black shadow-lg">
            <table className="w-full border-collapse text-left text-sm text-gray-400">
              <thead className="bg-[#151515] border-b border-brand-gray text-xs font-mono text-white uppercase tracking-wider">
                <tr>
                  <th scope="col" className="py-4 px-6 font-bold">Modell</th>
                  <th scope="col" className="py-4 px-6 font-bold">Abmessungen</th>
                  <th scope="col" className="py-4 px-6 font-bold">Netto / Brutto</th>
                  <th scope="col" className="py-4 px-6 font-bold">Verbrauch</th>
                  <th scope="col" className="py-4 px-6 font-bold">Nennleistung</th>
                  <th scope="col" className="py-4 px-6 font-bold">Verpackungseinheit</th>
                  <th scope="col" className="py-4 px-6 font-bold">Ausstattungsmerkmale</th>
                  <th scope="col" className="py-4 px-6 font-bold text-brand-amber">UVP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray/60">
                {[
                  { name: 'Victoria', art: 'Art. 404834', dims: '20x20x95cm', net: '11.9kg', gross: '12.9kg', cons: '1.0 kg/h', power: '4.9 kW/kg', pallet: '10 Stk. / Palette', features: 'Kompakter Säulenstrahler, stabiles Fundament', uvp: '€399.00', bg: '' },
                  { name: 'Samutu', art: 'Art. 404832', dims: '30x30x146cm', net: '26kg', gross: '35.4kg', cons: '1.17 kg/h', power: '4.9 kW/kg (5.7 kW)', pallet: '4 Stk. / Palette', features: 'Regelbarer Ventilator, arretierbare Rollen, inkl. Powerbank (12h)', uvp: '€699.00', bg: 'bg-[#151515]/20' },
                  { name: 'Bonita', art: 'Art. 404833', dims: '35.5x35.5x137cm', net: '33.5kg', gross: '33.9kg', cons: '1.17 kg/h', power: '4.9 kW/kg (5.7 kW)', pallet: '8 Stk. / Palette', features: 'Eckig, regelbarer Ventilator, Rollen, inkl. Powerbank', uvp: '€699.00', bg: '' },
                  { name: 'Lanterna', art: 'Art. 405446', dims: '24x24x59cm', net: '4.5kg', gross: '12.8kg', cons: 'ca. 0.5 kg/h', power: '2.5 kW/h', pallet: '20 Stk. / Palette', features: 'Kompaktes Tischmodell, geruchs- & raucharm', uvp: '€149.00', bg: 'bg-[#151515]/20' }
                ].map((spec) => (
                  <tr key={spec.name} className={`hover:bg-[#1a1a1a]/50 transition-colors ${spec.bg}`}>
                    <td className="py-5 px-6 font-display font-bold text-white">
                      {spec.name} <span className="text-[10px] block text-gray-500 font-mono">{spec.art}</span>
                    </td>
                    <td className="py-5 px-6 font-mono text-xs text-white">{spec.dims}</td>
                    <td className="py-5 px-6 font-mono text-xs">{spec.net} / {spec.gross}</td>
                    <td className="py-5 px-6 font-mono text-xs">{spec.cons}</td>
                    <td className="py-5 px-6 font-mono text-xs text-white">{spec.power}</td>
                    <td className="py-5 px-6 font-semibold text-brand-amber">{spec.pallet}</td>
                    <td className="py-5 px-6 text-xs text-gray-400">{spec.features}</td>
                    <td className="py-5 px-6 font-mono font-bold text-white text-base">{spec.uvp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
            <span>EX-WORKS LIEFERUNG: AB WERK TRIENGEN (SCHWEIZ) ODER DEUTSCHLAND-ZENTRALLAGER</span>
            <span className="text-brand-amber font-semibold">Preise zzgl. MwSt. und Versandkosten</span>
          </div>
        </div>
      </section>

      {/* Value Propositions advantages */}
      <section id="advantages" className="py-24 border-t border-brand-gray bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-amber/10 border border-brand-amber/20 text-brand-amber mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Premium B2B Wertversprechen</span>
            </div>
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">Warum B2B-Einkäufer Nouvel wählen</h2>
            <p className="text-gray-400">Unsere Pellet-Patio-Heizer wurden von Grund auf für die hohen Anforderungen von gewerblichen und industriellen Großabnehmern konzipiert.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark/40 border border-brand-gray hover:border-brand-amber/20 rounded-xl p-6 sm:p-8 transition-all hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-amber/10 border border-brand-amber/30 text-brand-amber flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">Hohe Handelsmarge & Attraktive UVP</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Profitieren Sie von einer starken Margenstruktur ab Werk Triengen/Schweiz. Unsere attraktiven UVPs ermöglichen Händlern exzellente Verkaufsspannen im Fachhandel und Online-Handel.
              </p>
            </div>

            <div className="bg-brand-dark/40 border border-brand-gray hover:border-brand-amber/20 rounded-xl p-6 sm:p-8 transition-all hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-amber/10 border border-brand-amber/30 text-brand-amber flex items-center justify-center mb-6">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">Gastronomie- & Event-Tauglich</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Sicherer Betrieb im HoReCa-Alltag ohne aufwändige Gasflaschen-Logistik. Die stufenlose Gebläseeinstellung via langlebiger Powerbank garantiert ein sauberes, perfektes Flammenbild über viele Stunden.
              </p>
            </div>

            <div className="bg-brand-dark/40 border border-brand-gray hover:border-brand-amber/20 rounded-xl p-6 sm:p-8 transition-all hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-amber/10 border border-brand-amber/30 text-brand-amber flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">Logistisch optimierte Einheiten</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Reibungsloser Speditionsversand und einfache Lagerhaltung durch standardisierte Paletten-Masse und feste Verpackungseinheiten (VPE). Klare Gewichtsklassen erleichtern die Transportkalkulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi Step Lead Form */}
      <section id="lead-form" className="py-24 border-t border-brand-gray bg-brand-dark/40 relative">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-amber/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black border border-brand-gray rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            
            {!formSubmitted ? (
              <>
                <div className="text-center mb-10 border-b border-brand-gray/80 pb-6">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">Palettenangebot & Konditionen anfordern</h2>
                  <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-wider">Exklusiv für B2B-Kunden, Großabnehmer und Wiederverkäufer</p>
                  
                  {/* Progress tracker */}
                  <div className="flex items-center justify-center mt-6 gap-3">
                    <span className="text-xs font-mono font-bold">Schritt {formStep} von 2</span>
                    <div className="w-24 bg-brand-gray h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-brand-amber h-full transition-all duration-300" 
                        style={{ width: formStep === 1 ? '50%' : '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit}>
                  {formStep === 1 ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Firmenname *</label>
                          <input 
                            type="text" required value={companyName} 
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors" 
                            placeholder="GmbH, AG, e.K." 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Branche *</label>
                          <select 
                            required value={industry} 
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors"
                          >
                            <option value="" disabled>Zutreffendes wählen</option>
                            <option value="horeca">Gastronomie & Hotellerie (HoReCa)</option>
                            <option value="wholesale">Großhandel & Distributor</option>
                            <option value="retail">Bau- & Gartenmarkt / Einzelhandel</option>
                            <option value="event">Event-Agentur & Vermietung</option>
                            <option value="other">Sonstiges Unternehmen</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Geplante Abnahmemenge *</label>
                          <select 
                            required value={orderVolume} 
                            onChange={(e) => setOrderVolume(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors"
                          >
                            <option value="" disabled>Menge wählen</option>
                            <option value="small">Einzelgeräte (1 - 5 Stück)</option>
                            <option value="pallet-1-2">1 - 2 Paletten (Abnahme auf Palette)</option>
                            <option value="pallet-3-5">3 - 5 Paletten</option>
                            <option value="pallet-bulk">Massenbestellung (&gt; 5 Paletten)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Bevorzugtes Modell</label>
                          <select 
                            value={preferredModel} 
                            onChange={(e) => setPreferredModel(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors"
                          >
                            <option value="all">Gesamtes Sortiment (Vergleichsangebot)</option>
                            <option value="Victoria">Victoria (Stand-Säule)</option>
                            <option value="Samutu">Samutu (Premium mit Ventilator)</option>
                            <option value="Bonita">Bonita (Eckig mit Ventilator)</option>
                            <option value="Lanterna">Lanterna (Tisch-Modell)</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button 
                          type="button" onClick={handleNextStep} 
                          className="inline-flex items-center justify-center px-6 h-12 text-sm font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded-lg shadow-glow-amber hover:shadow-glow-amber-strong transition-all"
                        >
                          Weiter zu Kontaktdaten
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Ansprechpartner *</label>
                          <input 
                            type="text" required value={contactName} 
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors" 
                            placeholder="Vorname Nachname" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Geschäftliche E-Mail *</label>
                          <input 
                            type="email" required value={contactEmail} 
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors" 
                            placeholder="name@firma.de" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Telefonnummer *</label>
                          <input 
                            type="tel" required value={contactPhone} 
                            onChange={(e) => setContactPhone(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors" 
                            placeholder="+49 30 1234567" 
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Lieferland / Postleitzahl *</label>
                          <input 
                            type="text" required value={contactCountry} 
                            onChange={(e) => setContactCountry(e.target.value)}
                            className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors" 
                            placeholder="z.B. Deutschland, PLZ 10115" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Anmerkungen oder Sonderwünsche</label>
                        <textarea 
                          rows="3" value={contactNotes} 
                          onChange={(e) => setContactNotes(e.target.value)}
                          className="w-full bg-[#181818] border border-brand-gray focus:border-brand-amber rounded-lg px-4 py-3 text-sm text-white outline-none transition-colors resize-none" 
                          placeholder="z.B. Lieferfristen, gewünschte Zubehörteile (Zusatz-Powerbanks etc.)"
                        ></textarea>
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button 
                          type="button" onClick={handlePrevStep} 
                          className="inline-flex items-center justify-center px-4 h-12 text-sm font-semibold text-gray-400 hover:text-white transition-all"
                        >
                          <ArrowLeft className="w-4 h-4 mr-1.5" />
                          Zurück
                        </button>
                        
                        <button 
                          type="submit" 
                          className="inline-flex items-center justify-center px-8 h-12 text-sm font-bold text-brand-black bg-brand-amber hover:bg-amber-400 rounded-lg shadow-glow-amber hover:shadow-glow-amber-strong transition-all"
                        >
                          Unverbindliches Angebot anfordern
                          <Send className="w-4 h-4 ml-1.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 flex items-center justify-center mx-auto shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Anfrage erfolgreich übermittelt!</h3>
                  <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">Vielen Dank für Ihr Interesse. Ein Nouvel-B2B-Berater wird sich innerhalb von 24 Stunden mit Ihrer individuellen Händler-Preisliste und Speditionskonditionen bei Ihnen melden.</p>
                </div>
                <button onClick={handleFormReset} className="inline-flex items-center justify-center px-5 h-11 text-xs font-bold text-white bg-transparent border border-brand-steel hover:bg-white/5 rounded transition-all">
                  Weitere Anfrage senden
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black border-t border-brand-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-brand-amber to-orange-500 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-brand-black stroke-[2.5]" />
                </div>
                <span className="font-display font-extrabold text-xl tracking-wider text-white">NOUVEL</span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                Hochwertige Outdoor-Heizlösungen für Gewerbe, Hotellerie und Großhandel. Ex-Works-Verkauf ab Werk Triengen (Kanton Luzern, Schweiz) sowie direkter Speditionsversand in die gesamte EU.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Modell-Übersicht</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li><a href="#models" className="hover:text-brand-amber transition-colors">Victoria (Säule)</a></li>
                <li><a href="#models" className="hover:text-brand-amber transition-colors">Samutu (Premium Fan)</a></li>
                <li><a href="#models" className="hover:text-brand-amber transition-colors">Bonita (Square Fan)</a></li>
                <li><a href="#models" className="hover:text-brand-amber transition-colors">Lanterna (Tischfeuer)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">Rechtliches</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-brand-amber transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-brand-amber transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-brand-amber transition-colors">Lieferbedingungen (Incoterms Ex-Works)</a></li>
                <li><a href="#" className="hover:text-brand-amber transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-gray/50 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <span>© 2026 Nouvel B2B Commercial Line. Alle Rechte vorbehalten.</span>
            <span>Made for HoReCa & Großhandel.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
