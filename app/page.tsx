"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import ComparisonCarousel from "./comparison-carousel"
import IntroAnimation from "./intro-animation"
import { BrutalistIcons } from "./brutalist-icons"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation observer setup
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setAnimatedElements((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".stagger-item")
    elements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [showIntro])

  // Prevent scroll during intro animation
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [showIntro])

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />
  }

  return (
    <div className="relative w-full">
      {/* Microsoft for Startups Sub-header */}
      <div className="bg-[#f5f5f5] py-[0.6em] text-center text-[0.85em] font-body text-gray-700 sticky top-0 z-50 border-b border-gray-200">
        <span className="flex items-center justify-center gap-2">
          Proud member of <img src="/microsoft-logo.png" alt="Microsoft" className="h-[1.2em]" /> Microsoft for Startups
          Founders Hub
        </span>
      </div>

      {/* Header */}
      <header
        className={cn(
          "bg-white sticky top-[2.3em] z-40 transition-all duration-300 border-b border-gray-200",
          scrolled ? "py-[0.8rem]" : "py-[1.2rem]",
        )}
      >
        <div className="container mx-auto flex items-center justify-center">
          <div className="font-black tracking-tight transition-all duration-300 font-header text-center text-[1.5em]">
            <span className="text-[#0d2b4e]">HEALTH</span>
            <span className="text-[#2a9d8f]">/HEALTH</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section gradient-subtle-1">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="inline-block px-[0.75em] py-[0.25em] mb-[2em] text-[0.8em] bg-white/50 backdrop-blur-xl font-mono font-medium rounded-md premium-border">
              healthhealth.io
            </div>
            <h1 className="section-title max-w-[80%] mb-[0.8em]">
              HEALTH/HEALTH transforma a conversa clínica em prontuário completo.
            </h1>
            <p className="section-subtitle mb-[1em]">Automático. Imediato. Seguro.</p>
            <p className="text-[1em] text-black/70 max-w-[70%] mb-[3em] font-body">
              Sem digitação. Sem formulário. Sem perda de tempo. Você fala com seu paciente — a plataforma escuta,
              analisa e gera a documentação clínica por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-[1.2em] w-full max-w-[80%] justify-center">
              <button className="premium-button w-full sm:w-auto">SOLICITAR DEMONSTRAÇÃO</button>
              <button className="premium-outline-button w-full sm:w-auto">SAIBA MAIS</button>
            </div>
          </div>
        </section>

        {/* Core Functionality Section */}
        <section id="features" className="section gradient-subtle-2">
          <div className="container mx-auto">
            <h2 className="section-title text-center mb-[2.5em]">O QUE O HEALTH/HEALTH FAZ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1.5em]">
              {[
                {
                  icon: <BrutalistIcons.Mic />,
                  title: "Escuta em tempo real",
                  description: "Captura a consulta enquanto você conversa naturalmente com seu paciente.",
                },
                {
                  icon: <BrutalistIcons.Document />,
                  title: "Gera prontuário estruturado",
                  description: "Cria documentação clínica completa seguindo padrões médicos reconhecidos.",
                },
                {
                  icon: <BrutalistIcons.Brain />,
                  title: "Identifica padrões clínicos",
                  description: "Reconhece sintomas, diagnósticos e tratamentos relevantes durante a consulta.",
                },
                {
                  icon: <BrutalistIcons.Chart />,
                  title: "Acompanha o paciente",
                  description: "Ajuda a monitorar a evolução do paciente ao longo do tempo com histórico completo.",
                },
                {
                  icon: <BrutalistIcons.Shield />,
                  title: "Segurança e precisão",
                  description: "Garante confidencialidade dos dados e alta precisão na documentação médica.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  id={`feature-${index}`}
                  className={cn(
                    "feature-card stagger-item",
                    animatedElements.includes(`feature-${index}`) && "animate-fadeIn",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon bg-[#0d2b4e] text-white">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Carousel Section */}
        <section id="comparison" className="section">
          <div className="container mx-auto">
            <h2 className="section-title text-center">HEALTH/HEALTH vs. CONCORRENTES</h2>
            <p className="section-subtitle text-center mx-auto">
              Veja como o HEALTH/HEALTH se compara com outras soluções de documentação disponíveis no mercado.
            </p>

            <ComparisonCarousel />
          </div>
        </section>

        {/* Sections for Developers and Investors */}
        <section className="section gradient-subtle-3">
          <Tabs defaultValue="developers" className="w-full">
            <div className="container mx-auto">
              <TabsList className="grid w-full max-w-[600px] mx-auto grid-cols-2 mb-[3em] rounded-md overflow-hidden premium-border">
                <TabsTrigger
                  value="developers"
                  id="developers"
                  className="data-[state=active]:bg-[#0d2b4e] data-[state=active]:text-white rounded-none data-[state=inactive]:bg-white font-header font-medium py-[1em] text-[0.8em] transition-all duration-300"
                >
                  PARA DESENVOLVEDORES
                </TabsTrigger>
                <TabsTrigger
                  value="investors"
                  id="investors"
                  className="data-[state=active]:bg-[#0d2b4e] data-[state=active]:text-white rounded-none data-[state=inactive]:bg-white font-header font-medium py-[1em] text-[0.8em] transition-all duration-300"
                >
                  PARA INVESTIDORES
                </TabsTrigger>
              </TabsList>

              <TabsContent value="developers" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3em]">
                  <div>
                    <h3 className="text-[1.6em] font-black mb-[1.2em] font-header">JUNTE-SE AO NOSSO TIME</h3>
                    <p className="text-[1em] mb-[1.5em] font-body text-black/80 leading-relaxed">
                      Estamos construindo a próxima geração de ferramentas para profissionais de saúde e precisamos de
                      talentos excepcionais para nos ajudar a transformar a documentação médica.
                    </p>
                    <div className="space-y-[2em] mb-[2em]">
                      <div className="premium-card p-[1.5em]">
                        <h4 className="feature-title">ENGENHEIRO DE ML/IA</h4>
                        <p className="feature-description mb-[1.2em]">
                          Trabalhe com modelos de linguagem avançados e processamento de áudio para melhorar nossa
                          tecnologia de transcrição e análise médica.
                        </p>
                        <button className="premium-outline-button text-[0.8em]">SAIBA MAIS</button>
                      </div>

                      <div className="premium-card p-[1.5em]">
                        <h4 className="feature-title">DESENVOLVEDOR FULL-STACK</h4>
                        <p className="feature-description mb-[1.2em]">
                          Construa interfaces intuitivas e sistemas robustos que conectam médicos a nossa tecnologia de
                          documentação automatizada.
                        </p>
                        <button className="premium-outline-button text-[0.8em]">SAIBA MAIS</button>
                      </div>
                    </div>
                    <button className="premium-button">VER TODAS AS VAGAS</button>
                  </div>
                  <div className="premium-card p-[2em]">
                    <h4 className="text-[1.4em] font-black mb-[1.2em] font-header">NOSSO STACK TECNOLÓGICO</h4>
                    <div className="grid grid-cols-2 gap-[1em] mb-[2em]">
                      {["Python", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow", "AWS", "Azure"].map(
                        (tech, index) => (
                          <div
                            key={index}
                            className="bg-white/80 p-[1em] text-center font-mono text-[0.8em] font-medium rounded-md premium-border"
                          >
                            {tech}
                          </div>
                        ),
                      )}
                    </div>
                    <p className="feature-description mb-[1.5em]">
                      Trabalhamos com tecnologias de ponta para criar soluções inovadoras que transformam a prática
                      médica. Nossa equipe é remota e distribuída globalmente.
                    </p>
                    <button className="premium-button w-full">ENVIAR CURRÍCULO</button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="investors" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3em]">
                  <div>
                    <h3 className="text-[1.6em] font-black mb-[1.2em] font-header">OPORTUNIDADE DE INVESTIMENTO</h3>
                    <p className="text-[1em] mb-[1.5em] font-body text-black/80 leading-relaxed">
                      HEALTH/HEALTH representa uma solução inovadora para um problema crítico no setor de saúde: a
                      documentação médica eficiente e precisa.
                    </p>
                    <ul className="space-y-[1.2em] mb-[2em]">
                      {[
                        "Mercado potencial de US$ 15 bilhões globalmente",
                        "Tecnologia proprietária com múltiplas patentes pendentes",
                        "Modelo de negócio SaaS com alta retenção de clientes",
                        "Equipe fundadora com experiência médica e tecnológica",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-[0.8em]">
                          <div className="w-[0.5em] h-[0.5em] bg-[#0d2b4e] rounded-full mt-[0.5em] flex-shrink-0"></div>
                          <span className="font-body text-[0.9em] text-black/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="premium-button">DECK PARA INVESTIDORES</button>
                  </div>
                  <div className="premium-card p-[2em]">
                    <h4 className="text-[1.4em] font-black mb-[1.2em] font-header">MÉTRICAS-CHAVE</h4>
                    <div className="space-y-[1.5em]">
                      {[
                        { label: "CRESCIMENTO MoM", value: "22%", width: "22%" },
                        { label: "RETENÇÃO", value: "94%", width: "94%" },
                        { label: "NPS", value: "87", width: "87%" },
                      ].map((metric, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-[0.6em]">
                            <span className="font-medium font-header text-[0.9em]">{metric.label}</span>
                            <span className="font-black font-header text-[0.9em]">{metric.value}</span>
                          </div>
                          <div className="w-full bg-black/5 h-[0.6em] rounded-full overflow-hidden">
                            <div className="bg-[#0d2b4e] h-full rounded-full" style={{ width: metric.width }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[2em] p-[1.5em] bg-white/70 rounded-lg premium-border">
                      <h5 className="font-bold font-header text-[1em] mb-[0.8em]">PRÓXIMA RODADA</h5>
                      <p className="feature-description">
                        Estamos levantando uma rodada Seed de US$ 2M para expandir nossa equipe de desenvolvimento e
                        iniciar operações em novos mercados.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-[70%] mx-auto text-center">
              <h2 className="section-title mb-[1.2em]">
                HEALTH/HEALTH não é uma IA de reunião. É uma extensão do seu raciocínio clínico.
              </h2>
              <p className="section-subtitle mb-[2.5em]">
                Junte-se aos profissionais de saúde que estão transformando sua prática clínica com documentação
                automática e inteligente.
              </p>
              <button className="premium-button flex items-center gap-[0.8em] mx-auto">
                SOLICITAR DEMONSTRAÇÃO <ArrowRight className="w-[0.9em] h-[0.9em]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-[5%] bg-[#f5f5f5]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[2em]">
            <div className="font-black text-[1.2em] font-header">
              <span className="text-[#0d2b4e]">HEALTH</span>
              <span className="text-[#2a9d8f]">/HEALTH</span>
            </div>

            <div className="text-center md:text-left">
              <p className="text-[0.8em] text-black/70 mb-[0.3em] font-header">
                Desenvolvido por médicos para médicos.
              </p>
              <p className="text-[0.8em] text-black/70 mb-[0.3em] font-header">Plataforma em construção contínua.</p>
              <p className="text-[0.8em] text-black/70 font-mono font-medium">
                healthhealth.io — uma ferramenta IREAJE.CLOUD
              </p>
            </div>

            <div className="flex flex-wrap gap-[1em] justify-center">
              <button className="premium-outline-button text-[0.7em]">POLÍTICA DE PRIVACIDADE</button>
              <button className="premium-outline-button text-[0.7em]">TERMOS DE USO</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
