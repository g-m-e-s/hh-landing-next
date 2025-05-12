"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, DoorClosedIcon as Close } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import ComparisonCarousel from "./comparison-carousel"
import IntroAnimation from "./intro-animation"
import { BrutalistIcons } from "./brutalist-icons"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Adiciona a classe para prevenir scroll durante a animação
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
      <div className="bg-[#f0f0f0] py-[0.4em] border-b border-black text-center text-[0.7em] font-mono font-bold sticky top-0 z-50">
        Microsoft for Startups Founders Hub Member
      </div>

      {/* Header */}
      <header
        className={cn(
          "border-b border-black sticky top-[1.8em] z-40 bg-white/80 backdrop-blur-xl transition-all duration-300",
          scrolled ? "py-[0.4rem]" : "py-[0.8rem]",
        )}
      >
        <div className="w-[92%] mx-auto flex items-center justify-between">
          <div
            className={cn(
              "font-black tracking-tight transition-all duration-300 font-mono",
              scrolled ? "text-[1em]" : "text-[1.3em] sm:text-[1.5em] md:text-[1.7em]",
            )}
          >
            HEALTH/HEALTH
          </div>

          <nav className="hidden md:flex gap-[2em]">
            <Link
              href="#features"
              className="text-[0.8em] font-bold font-mono hover:underline underline-offset-4 decoration-2"
            >
              RECURSOS
            </Link>
            <Link
              href="#comparison"
              className="text-[0.8em] font-bold font-mono hover:underline underline-offset-4 decoration-2"
            >
              COMPARAÇÃO
            </Link>
            <Link
              href="#developers"
              className="text-[0.8em] font-bold font-mono hover:underline underline-offset-4 decoration-2"
            >
              DESENVOLVEDORES
            </Link>
            <Link
              href="#investors"
              className="text-[0.8em] font-bold font-mono hover:underline underline-offset-4 decoration-2"
            >
              INVESTIDORES
            </Link>
          </nav>

          <div className="flex items-center gap-[1em]">
            <Button className="hidden md:flex bg-black text-white hover:bg-black/90 rounded-none font-bold text-[0.8em] py-[0.5em] px-[0.9em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
              SOLICITAR ACESSO
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <Close /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black z-40">
            <nav className="flex flex-col p-[1em]">
              <Link
                href="#features"
                className="py-[0.75em] border-b border-black/20 font-bold font-mono text-[0.8em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                RECURSOS
              </Link>
              <Link
                href="#comparison"
                className="py-[0.75em] border-b border-black/20 font-bold font-mono text-[0.8em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                COMPARAÇÃO
              </Link>
              <Link
                href="#developers"
                className="py-[0.75em] border-b border-black/20 font-bold font-mono text-[0.8em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                DESENVOLVEDORES
              </Link>
              <Link
                href="#investors"
                className="py-[0.75em] font-bold font-mono text-[0.8em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                INVESTIDORES
              </Link>
              <Button className="mt-[1em] bg-black text-white hover:bg-black/90 rounded-none w-full font-bold text-[0.8em] py-[0.6em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                SOLICITAR ACESSO
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-[8%] border-b border-black">
          <div className="w-[92%] mx-auto flex flex-col items-center text-center">
            <div className="inline-block px-[0.75em] py-[0.25em] mb-[1.5em] text-[0.8em] border border-black bg-white/50 backdrop-blur-xl font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
              healthhealth.io
            </div>
            <h1 className="text-[1.8em] sm:text-[2.2em] md:text-[2.6em] font-black tracking-tighter max-w-[90%] mb-[0.5em] leading-tight font-mono">
              HEALTH/HEALTH transforma a conversa clínica em prontuário completo. Automático. Imediato. Seguro.
            </h1>
            <p className="text-[1em] sm:text-[1.2em] md:text-[1.3em] text-black/80 max-w-[90%] mb-[0.5em] font-header">
              Sem digitação. Sem formulário. Sem perda de tempo.
            </p>
            <p className="text-[0.9em] text-black/80 max-w-[90%] mb-[2em] font-body">
              Você fala com seu paciente — a plataforma escuta, analisa e gera a documentação clínica por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-[1em] w-full max-w-[90%] justify-center">
              <Button className="bg-black text-white hover:bg-black/90 text-[0.8em] py-[0.9em] px-[1.3em] rounded-none font-bold font-mono w-full sm:w-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                SOLICITAR DEMONSTRAÇÃO
              </Button>
              <Button
                variant="outline"
                className="border border-black hover:bg-black/5 text-[0.8em] py-[0.9em] px-[1.3em] rounded-none font-bold font-mono w-full sm:w-auto shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]"
              >
                SAIBA MAIS
              </Button>
            </div>
          </div>
        </section>

        {/* Core Functionality Section */}
        <section id="features" className="py-[8%] border-b border-black bg-black/5">
          <div className="w-[92%] mx-auto">
            <h2 className="text-[1.6em] md:text-[2em] font-black text-center mb-[1.5em] font-mono">
              O QUE O HEALTH/HEALTH FAZ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1em]">
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
                <Card
                  key={index}
                  className="backdrop-blur-2xl bg-white/60 border border-black p-[1.1em] hover:shadow-lg transition-all rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[2.8em] h-[2.8em] flex items-center justify-center bg-black text-white mb-[0.8em] shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-[1.1em] font-bold mb-[0.5em] font-mono">{feature.title}</h3>
                    <p className="text-black/70 font-body text-[0.8em]">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Carousel Section */}
        <section id="comparison" className="py-[8%] border-b border-black">
          <div className="w-[92%] mx-auto">
            <h2 className="text-[1.6em] md:text-[2em] font-black text-center mb-[1.5em] font-mono">
              HEALTH/HEALTH vs. CONCORRENTES
            </h2>
            <p className="text-center text-[0.9em] text-black/70 mb-[2em] max-w-[90%] mx-auto font-body">
              Veja como o HEALTH/HEALTH se compara com outras soluções de documentação disponíveis no mercado.
            </p>

            <ComparisonCarousel />
          </div>
        </section>

        {/* Sections for Developers and Investors */}
        <section className="border-b border-black">
          <Tabs defaultValue="developers" className="w-full">
            <div className="w-[92%] mx-auto py-[8%]">
              <TabsList className="grid w-full grid-cols-2 mb-[2em] rounded-none">
                <TabsTrigger
                  value="developers"
                  id="developers"
                  className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none border border-black data-[state=inactive]:bg-white font-mono font-bold py-[0.8em] text-[0.75em] sm:text-[0.8em]"
                >
                  PARA DESENVOLVEDORES
                </TabsTrigger>
                <TabsTrigger
                  value="investors"
                  id="investors"
                  className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none border border-black data-[state=inactive]:bg-white font-mono font-bold py-[0.8em] text-[0.75em] sm:text-[0.8em]"
                >
                  PARA INVESTIDORES
                </TabsTrigger>
              </TabsList>

              <TabsContent value="developers" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em]">
                  <div>
                    <h3 className="text-[1.4em] font-black mb-[1em] font-mono">JUNTE-SE AO NOSSO TIME</h3>
                    <p className="text-[0.9em] mb-[1em] font-body">
                      Estamos construindo a próxima geração de ferramentas para profissionais de saúde e precisamos de
                      talentos excepcionais para nos ajudar a transformar a documentação médica.
                    </p>
                    <div className="space-y-[1.5em] mb-[1.5em]">
                      <div className="border border-black p-[1em] bg-white/60 backdrop-blur-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.08)]">
                        <h4 className="text-[1em] font-bold mb-[0.5em] font-mono">ENGENHEIRO DE ML/IA</h4>
                        <p className="text-[0.8em] text-black/70 mb-[0.8em] font-body">
                          Trabalhe com modelos de linguagem avançados e processamento de áudio para melhorar nossa
                          tecnologia de transcrição e análise médica.
                        </p>
                        <Button
                          variant="outline"
                          className="text-[0.75em] py-[0.5em] px-[0.8em] border border-black rounded-none font-mono font-bold"
                        >
                          SAIBA MAIS
                        </Button>
                      </div>

                      <div className="border border-black p-[1em] bg-white/60 backdrop-blur-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.08)]">
                        <h4 className="text-[1em] font-bold mb-[0.5em] font-mono">DESENVOLVEDOR FULL-STACK</h4>
                        <p className="text-[0.8em] text-black/70 mb-[0.8em] font-body">
                          Construa interfaces intuitivas e sistemas robustos que conectam médicos a nossa tecnologia de
                          documentação automatizada.
                        </p>
                        <Button
                          variant="outline"
                          className="text-[0.75em] py-[0.5em] px-[0.8em] border border-black rounded-none font-mono font-bold"
                        >
                          SAIBA MAIS
                        </Button>
                      </div>
                    </div>
                    <Button className="bg-black text-white hover:bg-black/90 rounded-none font-mono font-bold text-[0.8em] py-[0.8em] px-[1.5em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                      VER TODAS AS VAGAS
                    </Button>
                  </div>
                  <div className="bg-black/5 p-[1.5em] border border-black backdrop-blur-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                    <h4 className="text-[1.2em] font-black mb-[1em] font-mono">NOSSO STACK TECNOLÓGICO</h4>
                    <div className="grid grid-cols-2 gap-[1em] mb-[1.5em]">
                      {["Python", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow", "AWS", "Azure"].map(
                        (tech, index) => (
                          <div
                            key={index}
                            className="border border-black bg-white/80 p-[0.8em] text-center font-mono text-[0.8em] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
                          >
                            {tech}
                          </div>
                        ),
                      )}
                    </div>
                    <p className="text-[0.8em] text-black/70 font-body mb-[1em]">
                      Trabalhamos com tecnologias de ponta para criar soluções inovadoras que transformam a prática
                      médica. Nossa equipe é remota e distribuída globalmente.
                    </p>
                    <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none font-mono font-bold text-[0.8em] py-[0.8em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                      ENVIAR CURRÍCULO
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="investors" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em]">
                  <div>
                    <h3 className="text-[1.4em] font-black mb-[1em] font-mono">OPORTUNIDADE DE INVESTIMENTO</h3>
                    <p className="text-[0.9em] mb-[1em] font-body">
                      HEALTH/HEALTH representa uma solução inovadora para um problema crítico no setor de saúde: a
                      documentação médica eficiente e precisa.
                    </p>
                    <ul className="space-y-[1em] mb-[1.5em]">
                      {[
                        "Mercado potencial de US$ 15 bilhões globalmente",
                        "Tecnologia proprietária com múltiplas patentes pendentes",
                        "Modelo de negócio SaaS com alta retenção de clientes",
                        "Equipe fundadora com experiência médica e tecnológica",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-[0.5em]">
                          <div className="w-[0.8em] h-[0.8em] border border-black bg-black mt-[0.2em] flex-shrink-0"></div>
                          <span className="font-body text-[0.8em]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-black text-white hover:bg-black/90 rounded-none font-mono font-bold text-[0.8em] py-[0.8em] px-[1.5em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                      DECK PARA INVESTIDORES
                    </Button>
                  </div>
                  <div className="bg-black/5 p-[1.5em] border border-black backdrop-blur-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                    <h4 className="text-[1.2em] font-black mb-[1em] font-mono">MÉTRICAS-CHAVE</h4>
                    <div className="space-y-[1.2em]">
                      {[
                        { label: "CRESCIMENTO MoM", value: "22%", width: "22%" },
                        { label: "RETENÇÃO", value: "94%", width: "94%" },
                        { label: "NPS", value: "87", width: "87%" },
                      ].map((metric, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-[0.4em]">
                            <span className="font-bold font-mono text-[0.8em]">{metric.label}</span>
                            <span className="font-black font-mono text-[0.8em]">{metric.value}</span>
                          </div>
                          <div className="w-full bg-black/10 h-[0.6em] border border-black">
                            <div className="bg-black h-full" style={{ width: metric.width }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[1.5em] p-[1em] border border-black bg-white/70 backdrop-blur-xl shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]">
                      <h5 className="font-bold font-mono text-[0.9em] mb-[0.5em]">PRÓXIMA RODADA</h5>
                      <p className="text-[0.8em] text-black/70 font-body">
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
        <section className="py-[8%]">
          <div className="w-[92%] mx-auto">
            <div className="max-w-[90%] mx-auto text-center">
              <h2 className="text-[1.6em] md:text-[2em] font-black mb-[1em] font-mono">
                HEALTH/HEALTH não é uma IA de reunião. É uma extensão do seu raciocínio clínico.
              </h2>
              <p className="text-[0.9em] text-black/70 mb-[2em] font-body">
                Junte-se aos profissionais de saúde que estão transformando sua prática clínica com documentação
                automática e inteligente.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 text-[0.8em] px-[1.3em] py-[0.9em] rounded-none flex items-center gap-[0.5em] mx-auto font-bold font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
                SOLICITAR DEMONSTRAÇÃO <ArrowRight className="w-[0.9em] h-[0.9em]" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-[5%] border-t border-black bg-black/5">
        <div className="w-[92%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[1.5em]">
            <div className="font-black text-[1.1em] font-mono">HEALTH/HEALTH</div>

            <div className="text-center md:text-left">
              <p className="text-[0.75em] text-black/70 mb-[0.2em] font-header">
                Desenvolvido por médicos para médicos.
              </p>
              <p className="text-[0.75em] text-black/70 mb-[0.2em] font-header">Plataforma em construção contínua.</p>
              <p className="text-[0.75em] text-black/70 font-mono font-bold">
                healthhealth.io — uma ferramenta IREAJE.CLOUD
              </p>
            </div>

            <div className="flex flex-wrap gap-[0.8em] justify-center">
              <Button
                variant="outline"
                size="sm"
                className="border border-black hover:bg-black/5 rounded-none font-mono text-[0.65em] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
              >
                POLÍTICA DE PRIVACIDADE
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border border-black hover:bg-black/5 rounded-none font-mono text-[0.65em] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
              >
                TERMOS DE USO
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
