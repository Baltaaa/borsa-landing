import { Scale, Award, Shield, Users, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, Phone, FileText, Heart, Zap, Clock, MapPin, Calendar } from "lucide-react"
import { useState, useRef, useEffect } from "react"

function CountUpNumber({ end, duration = 1500 }) {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  const onVisible = (el) => {
    if (!el || hasStarted.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        hasStarted.current = true
        const startTime = Date.now()
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        animate()
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(el)
  }

  return <span ref={onVisible}>{count}</span>
}

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return isVisible ? (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#D1A649' }}>
        <div className="w-1 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#D1A649' }} />
      </div>
    </div>
  ) : null
}

function BorsaAbogados() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #0B132B 0%, #1C2541 100%);
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0B132B] border-b border-white/10 shadow-md py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center overflow-hidden h-12 sm:h-16 md:h-20">
            <img 
              src="/borsa-logo2.png" 
              alt="Borsa Abogados" 
              className="h-24 sm:h-32 md:h-40 w-auto object-contain -my-6 sm:-my-8 md:-my-10 transition-all duration-300" 
            />
          </div>
          <a 
            href="https://wa.me/541123346490?text=Hola%20Borsa%20Abogados,%20necesito%20asesoramiento%20por%20un%20accidente%20de%20tránsito." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2.5 text-white rounded-md font-bold text-xs sm:text-sm hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2" 
            style={{ backgroundColor: '#D1A649' }}
          >
            <Phone size={14} /> Consulta Gratis 24hs
          </a>
        </div>
      </nav>

      {/* HERO SECTION - Meta Ads Optimized with Split Layout */}
      <section className="relative hero-gradient text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-[#D1A649] mb-6">
              <AlertTriangle size={16} /> Especialistas en Accidentes de Tránsito
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              ¿Chocaste? Conseguimos tu <span className="text-[#D1A649]">máxima indemnización</span>.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-light max-w-2xl">
              No dejes que la aseguradora decida cuánto vale tu recuperación. Reclamamos lesiones, daños materiales y ART. 
              <strong className="block mt-2 text-white font-semibold">Solo cobramos si vos cobrás. Sin gastos iniciales.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://wa.me/541123346490?text=Hola%20Borsa%20Abogados,%20necesito%20asesoramiento%20por%20un%20accidente%20de%20tránsito." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-white hover:opacity-90 hover:shadow-xl hover:scale-[1.02] transition-all font-bold text-base rounded-md shadow-lg" 
                style={{ backgroundColor: '#D1A649' }}
              >
                Iniciar Reclamo Gratis <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="tel:+541123346490" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all font-semibold text-base rounded-md"
              >
                Llamar de Urgencia
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#D1A649] shrink-0" />
                <span>Sin Costos Iniciales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#D1A649] shrink-0" />
                <span>Médicos Propios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#D1A649] shrink-0" />
                <span>Atención 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column - High Converting Form Card */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100 relative">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                Urgente
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B132B] mb-2">Consulta Express</h3>
              <p className="text-sm text-slate-500 mb-6">Completá y un abogado especialista te llamará en menos de 15 minutos.</p>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const details = e.target.details.value;
                const message = `Hola Borsa Abogados, mi nombre es ${name}. Mi teléfono es ${phone}. Tuve un accidente: ${details}`;
                window.open(`https://wa.me/541123346490?text=${encodeURIComponent(message)}`, '_blank');
              }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="Ej: Juan Pérez" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1C2541] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Teléfono / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    placeholder="Ej: 11 2334 6490" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1C2541] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">¿Cuándo y cómo fue el accidente?</label>
                  <textarea 
                    name="details"
                    rows="3" 
                    required
                    placeholder="Ej: Me chocaron de atrás ayer en Av. Colón, tengo dolor de cuello..." 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1C2541] text-sm resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 text-white font-bold rounded-lg hover:opacity-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#1C2541' }}
                >
                  <Scale size={16} /> Evaluar Mi Caso Gratis
                </button>
              </form>
              <p className="text-[11px] text-slate-400 text-center mt-4">
                🔒 Tus datos están protegidos bajo secreto profesional absoluto.
              </p>
            </div>
          </div>

        </div>
        <ScrollIndicator />
      </section>

      {/* STATS SECTION */}
      <section className="bg-white border-b border-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B132B] mb-1">
              <CountUpNumber end={98} />%
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Casos Ganados</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B132B] mb-1">
              $<CountUpNumber end={45} />M+
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">En Indemnizaciones</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B132B] mb-1">
              <CountUpNumber end={30} />+
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Años de Trayectoria</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B132B] mb-1">
              24/7
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Soporte de Urgencia</p>
          </div>
        </div>
      </section>

      {/* MULTIMEDIA SECTION - Real Office & Team Showcase */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto md:h-[550px]">
            <img 
              src="/borsa-lawyers-team.jpg" 
              alt="Socios de Borsa Abogados" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D1A649] mb-1">Compromiso Profesional</p>
              <h4 className="text-xl font-serif font-bold">Socios Fundadores & Especialistas</h4>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase">Respaldo Institucional</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B132B]">
              Un equipo de especialistas defendiendo tus derechos
            </h2>
            <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
              En Borsa Abogados entendemos que un accidente de tránsito altera tu vida por completo. Por eso, no solo te ofrecemos representación legal de primer nivel, sino también un acompañamiento humano e integral.
            </p>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Contamos con oficinas físicas equipadas para recibirte y coordinar toda la estrategia de tu reclamo con peritos mecánicos, médicos legistas y liquidadores de siniestros.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4ebe1] flex items-center justify-center text-[#D1A649] shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Oficinas Propias</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4ebe1] flex items-center justify-center text-[#D1A649] shrink-0">
                  <Calendar size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Atención Inmediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CLAIM - AGM Inspired */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase mb-3">Tu Reclamo Completo</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B132B] mb-4">
              ¿Qué conceptos reclamamos por vos?
            </h2>
            <p className="text-slate-600 font-light text-base sm:text-lg">
              Las compañías de seguros suelen ofrecer montos mínimos. Nosotros calculamos científicamente cada daño para exigir la indemnización máxima que te corresponde por ley.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: Heart, 
                title: "Lesiones Físicas y Secuelas", 
                desc: "Desde latigazos cervicales hasta lesiones graves. Evaluamos el daño corporal con peritos médicos propios para garantizar que cobres por cada secuela." 
              },
              { 
                icon: Zap, 
                title: "Daños Materiales", 
                desc: "Exigimos la reparación total de tu vehículo (auto, moto, bicicleta) o el pago del valor de destrucción total si corresponde, más la privación de uso." 
              },
              { 
                icon: FileText, 
                title: "Lucro Cesante", 
                desc: "¿No pudiste trabajar debido al accidente? Reclamamos todo el dinero que dejaste de percibir durante tu período de recuperación médica." 
              },
              { 
                icon: Clock, 
                title: "Gastos Médicos y Farmacia", 
                desc: "Recuperamos cada peso gastado en medicamentos, traslados, kinesiología, prótesis y tratamientos de rehabilitación futuros." 
              },
              { 
                icon: Scale, 
                title: "Accidentes de Trabajo (ART)", 
                desc: "Si el accidente ocurrió yendo o volviendo de tu trabajo (in itinere), gestionamos el reclamo ante la ART para asegurar tu indemnización laboral." 
              },
              { 
                icon: Shield, 
                title: "Fallecimiento y Daño Moral", 
                desc: "Acompañamos a las familias en los momentos más difíciles, gestionando con la máxima sensibilidad y firmeza legal las indemnizaciones correspondientes." 
              }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 hover:shadow-xl hover:border-[#D1A649]/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#f4ebe1' }}>
                    <Icon style={{ color: '#D1A649' }} size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B132B] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECONDARY MULTIMEDIA - Consultation & Office */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6 order-2 md:order-1">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase">Asesoramiento Personalizado</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B132B]">
              Evaluación científica del daño
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Para que un reclamo prospere con éxito ante las aseguradoras o en la justicia, la clave está en la prueba. En Borsa Abogados no improvisamos: cada lesión es documentada por médicos legistas y cada daño material es presupuestado por talleres y peritos mecánicos de confianza.
            </p>
            <div className="p-6 rounded-xl bg-slate-100 border-l-4 border-[#D1A649]">
              <p className="text-sm text-slate-700 font-medium italic">
                "La diferencia entre una indemnización baja y una justa radica en la calidad de las pericias médicas y técnicas presentadas."
              </p>
            </div>
          </div>
          
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                <img 
                  src="/borsa-consultation.jpg" 
                  alt="Abogado de Borsa en su escritorio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] mt-6">
                <img 
                  src="/borsa-office-hero.jpg" 
                  alt="Oficinas de Borsa Abogados" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO IN CASE OF ACCIDENT - AGM Inspired Guide */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase mb-3">Guía de Emergencia</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
                ¿Qué hacer inmediatamente después de un accidente?
              </h2>
              <p className="text-slate-300 font-light mb-8 leading-relaxed">
                Los primeros minutos y días son cruciales para asegurar tu salud y el éxito de tu futuro reclamo de indemnización. Seguí estos pasos clave:
              </p>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-[#D1A649] font-bold mb-2">⚠️ Plazo Límite Legal</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tenés un plazo máximo de <strong>72 horas hábiles</strong> para realizar la denuncia en tu propia compañía de seguros. ¡No dejes pasar el tiempo!
                </p>
              </div>
            </div>

            {/* Right Column - Steps */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { 
                  num: "01", 
                  title: "Priorizá la salud y llamá a emergencias", 
                  desc: "Si hay lesionados, llamá inmediatamente al 107 (SAME) o policía. Aunque sientas un dolor leve, hacete atender: muchas lesiones (como el latigazo cervical) aparecen horas después." 
                },
                { 
                  num: "02", 
                  title: "Tomá datos de todos los involucrados", 
                  desc: "Solicitá: Nombre, DNI, teléfono, patente del vehículo, marca y, fundamentalmente, el nombre de su compañía de seguros. Tomá fotos de las credenciales si es posible." 
                },
                { 
                  num: "03", 
                  title: "Fotografiá la escena del siniestro", 
                  desc: "Sacá fotos de los daños de ambos vehículos, la posición en la que quedaron en la calle, marcas de frenado, semáforos y carteles de la zona. Buscá testigos y pediles su contacto." 
                },
                { 
                  num: "04", 
                  title: "Contactanos antes de hablar con la aseguradora", 
                  desc: "Las aseguradoras intentarán grabarte o hacerte firmar declaraciones que limiten su responsabilidad. Te asesoramos gratis para redactar la denuncia de forma correcta." 
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D1A649] shrink-0">{step.num}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY BORSA - Trust & Contingency Fee */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Text */}
          <div>
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase mb-3">Nuestra Garantía</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B132B] mb-6">
              ¿Por qué reclamar con Borsa Abogados?
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed mb-6">
              A diferencia de los abogados generalistas, en Borsa nos dedicamos exclusivamente a la defense de víctimas de accidentes de tránsito. Conocemos perfectamente las estrategias que usan las aseguradoras para pagar de menos y cómo neutralizarlas.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#D1A649] shrink-0 mt-1" size={18} />
                <p className="text-sm text-slate-700">
                  <strong>Honorarios a resultado (Cuota Litis):</strong> No tenés que pagar nada por adelantado. Nosotros financiamos todo el proceso y solo cobramos un porcentaje cuando vos cobres tu indemnización.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#D1A649] shrink-0 mt-1" size={18} />
                <p className="text-sm text-slate-700">
                  <strong>Cuerpo médico y peritos propios:</strong> Evaluamos tus lesiones con profesionales de confianza para presentar un reclamo médico irrefutable ante la aseguradora.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#D1A649] shrink-0 mt-1" size={18} />
                <p className="text-sm text-slate-700">
                  <strong>Negociación extrajudicial rápida:</strong> Buscamos resolver tu caso en la etapa de mediación para que cobres lo antes posible, recurriendo a juicio solo si la oferta es injusta.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/541123346490?text=Hola%20Borsa%20Abogados,%20quiero%20hacer%20una%20consulta%20por%20un%20accidente." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0B132B] font-bold hover:text-[#D1A649] transition-colors"
              >
                Conocé más sobre nuestro método de trabajo <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: '#D1A649' }}></div>
            <h3 className="text-xl font-serif font-bold text-[#0B132B] mb-6">Compromiso de Transparencia</h3>
            
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Paso 1</p>
                <p className="text-base font-bold text-slate-800 mb-1">Consulta 100% Gratuita</p>
                <p className="text-xs sm:text-sm text-slate-500">Analizamos la viabilidad de tu caso sin ningún tipo de compromiso ni costo.</p>
              </div>
              <div className="pb-6 border-b border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Paso 2</p>
                <p className="text-base font-bold text-slate-800 mb-1">Cero Gastos de Bolsillo</p>
                <p className="text-xs sm:text-sm text-slate-500">Nosotros nos hacemos cargo de las cartas documento, peritajes y tasas de mediación.</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">Paso 3</p>
                <p className="text-base font-bold text-slate-800 mb-1">Cobro y Cierre</p>
                <p className="text-xs sm:text-sm text-slate-500">Cobrás tu indemnización mediante transferencia bancaria directa y recién ahí abonás nuestros honorarios pactados.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS - Real Siniestros Cases */}
      <section className="bg-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase mb-3">Casos Reales</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B132B] mb-4">
              Opiniones de personas que confiaron en nosotros
            </h2>
            <p className="text-slate-600 font-light">
              La tranquilidad de nuestros clientes es nuestro mayor logro. Conocé algunas de sus historias:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Mariano G. (Mar del Plata)",
                case: "Accidente de Moto",
                text: "Me chocó un auto que dobló a la izquierda sin mirar. Tuve fractura de muñeca. La aseguradora me ofrecía una miseria. En Borsa se encargaron de todo, me consiguieron los médicos y logramos una indemnización que realmente me sirvió para recuperarme. Excelentes profesionales."
              },
              {
                name: "Lucía S. (CABA)",
                case: "Choque de Atrás - Latigazo Cervical",
                text: "Estaba frenada en el semáforo y me chocaron de atrás. Tenía un dolor terrible de cuello pero no sabía si correspondía reclamar. Me asesoraron al instante, hicieron la denuncia y en menos de 3 meses cobré la indemnización por las lesiones. Súper rápidos y transparentes."
              },
              {
                name: "Roberto M. (Buenos Aires)",
                case: "Accidente de Peatón",
                text: "Un taxi me atropelló cruzando la senda peatonal. Estuve un mes sin poder trabajar. El estudio Borsa no solo reclamó los gastos médicos, sino también todo el lucro cesante por los días que perdí de trabajo. No tuve que poner un solo peso de mi bolsillo. Muy agradecido."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 font-light text-sm sm:text-base mb-6 italic">"{t.text}"</p>
                <p className="font-serif font-bold text-slate-800 text-sm sm:text-base">{t.name}</p>
                <p className="text-xs text-[#D1A649] font-semibold uppercase tracking-wider mt-1">{t.case}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Siniestros Focus */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#D1A649] font-bold uppercase mb-3">Preguntas Frecuentes</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B132B]">
            Despejá tus dudas sobre reclamos
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { 
              q: "¿Tengo que pagar algo para iniciar mi reclamo?", 
              a: "Absolutamente nada. Trabajamos bajo la modalid de 'pacto de cuota litis', lo que significa que financiamos todos los gastos del proceso (cartas documento, mediaciones, peritos) y solo cobramos un porcentaje de honorarios previamente pactado cuando vos cobres tu indemnización. Si no ganamos, no nos debés nada." 
            },
            { 
              q: "¿Cuánto tiempo tengo para reclamar después del accidente?", 
              a: "El plazo legal para realizar el reclamo civil es de hasta 3 años desde la fecha del accidente. Sin embargo, es fundamental actuar dentro de las primeras 72 horas para realizar las denuncias correspondientes en las aseguradoras y asegurar las pruebas (testigos, fotos, peritajes médicos)." 
            },
            { 
              q: "¿Qué pasa si el conductor que me chocó no tenía seguro?", 
              a: "Es una situación compleja pero no imposible. Dependiendo del caso, podemos dirigir el reclamo contra el dueño del vehículo, el conductor de forma personal, o evaluar si corresponde el reclamo a través de otras coberturas. Analizamos tu caso particular sin costo." 
            },
            { 
              q: "¿Puedo reclamar si yo iba como acompañante o en transporte público?", 
              a: "Sí, por supuesto. Como acompañante o pasajero de transporte público (colectivo, taxi, Uber) tenés derecho a reclamar el 100% de tu indemnización a las compañías de seguros de los vehículos involucrados, ya que no tenés ninguna responsabilidad en el hecho." 
            },
            { 
              q: "¿Cuánto demora en cobrarse una indemnización?", 
              a: "Los plazos varían según la compañía de seguros y la gravedad de las lesiones. Un reclamo por vía extrajudicial (mediación) suele resolverse en un plazo de entre 3 y 6 meses. Si es necesario ir a juicio por falta de acuerdo justo, el plazo puede extenderse, pero siempre buscando la máxima rentabilidad para vos." 
            },
            { 
              q: "¿Qué documentación necesito para empezar?", 
              a: "Para iniciar necesitamos: tu DNI, la denuncia de compra/venta o título del vehículo, fotos del accidente, datos del tercero (si los tenés) y cualquier constancia médica de atención de urgencia (recetas, radiografías, certificados). Si te falta algo, nosotros te ayudamos a conseguirlo." 
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#D1A649]/50">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-serif font-bold flex justify-between items-center hover:bg-slate-50 transition text-slate-800 text-sm sm:text-base"
              >
                {faq.q}
                <span className={`transition-transform text-xs text-[#D1A649] ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 py-4 text-slate-600 font-light text-sm border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl hero-gradient">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              No dejes pasar el tiempo. Reclamá lo que te corresponde.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 mb-8 font-light leading-relaxed">
              Las aseguradoras juegan con el desgaste y el paso del tiempo. Iniciá hoy tu consulta gratuita por WhatsApp y asegurá tu máxima indemnización con el respaldo de especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/541123346490?text=Hola%20Borsa%20Abogados,%20necesito%20asesoramiento%20por%20un%20accidente%20de%20tránsito." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-bold hover:opacity-90 transition rounded-md shadow-lg text-base" 
                style={{ backgroundColor: '#D1A649' }}
              >
                Consultar por WhatsApp Gratis <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="tel:+541123346490" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition rounded-md text-base font-semibold"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B132B] text-slate-400 px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center overflow-hidden h-12 sm:h-16 md:h-20 -ml-4 sm:-ml-6 md:-ml-8">
              <img 
                src="/borsa-logo2.png" 
                alt="Borsa Abogados" 
                className="h-24 sm:h-32 md:h-40 w-auto object-contain -my-6 sm:-my-8 md:-my-10 transition-all duration-300" 
              />
            </div>
            <p className="text-xs sm:text-sm font-light leading-relaxed mt-2">
              Estudio jurídico especializado en accidentes de tránsito, siniestros viales y reclamos de ART. Más de 30 años defendiendo los derechos de las víctimas en Argentina.
            </p>
          </div>
          <div>
            <p className="font-serif font-bold text-white mb-4">Atención de Urgencias</p>
            <p className="text-xs sm:text-sm font-light">Lunes a Viernes: 9:00 - 19:00</p>
            <p className="text-xs sm:text-sm font-light mt-1">Guardia de Siniestros: WhatsApp 24hs / 365 días</p>
            <p className="text-xs sm:text-sm font-light mt-3 text-[#D1A649]">📞 Urgencias: +54 9 11 2334-6490</p>
          </div>
          <div>
            <p className="font-serif font-bold text-white mb-4">Contacto y Ubicación</p>
            <p className="text-xs sm:text-sm font-light">WhatsApp: +54 9 11 2334-6490</p>
            <p className="text-xs sm:text-sm font-light mt-1">Buenos Aires, Argentina</p>
            <p className="text-xs sm:text-sm font-light mt-1">Email: contacto@borsaabogados.com.ar</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-xs font-light">
          © 2026 Borsa Abogados. Todos los derechos reservados. Demo de alta conversión optimizada por WhatsLead Studio.
        </div>
      </footer>
    </div>
  )
}

export default BorsaAbogados