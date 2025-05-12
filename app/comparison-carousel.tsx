"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Dados de comparação com ferramentas reais
const comparisonData = [
  {
    feature: "Prontuário médico completo",
    description:
      "Gera documentação clínica estruturada com todos os elementos necessários para um prontuário completo.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "Prontuário completo com estrutura SOAP" },
      { name: "Dragon Copilot", value: "parcial", note: "Apenas transcrição, sem estruturação" },
      { name: "Read.AI", value: "parcial", note: "Resumo básico, foco em reuniões" },
      { name: "Google Meet/Zoom", value: false, note: "Apenas transcrição básica" },
    ],
  },
  {
    feature: "Estrutura clínica",
    description: "Interpreta e organiza a informação em formatos clínicos padrão como SOAP, CID-10, etc.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "Reconhece automaticamente a estrutura SOAP" },
      { name: "Dragon Copilot", value: false, note: "Sem estruturação clínica" },
      { name: "Read.AI", value: false, note: "Sem conhecimento médico" },
      { name: "Google Meet/Zoom", value: false, note: "Sem estruturação" },
    ],
  },
  {
    feature: "Conversa natural",
    description: "Funciona com diálogo natural entre médico e paciente, sem necessidade de comandos.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "100% natural, sem comandos" },
      { name: "Dragon Copilot", value: "parcial", note: "Requer comandos específicos" },
      { name: "Read.AI", value: true, note: "Captura conversa natural" },
      { name: "Google Meet/Zoom", value: true, note: "Transcrição automática" },
    ],
  },
  {
    feature: "Diagnóstico e plano",
    description: "Identifica e estrutura diagnósticos e planos de tratamento a partir da conversa.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "Extrai e organiza automaticamente" },
      { name: "Dragon Copilot", value: "parcial", note: "Identificação básica, pouco precisa" },
      { name: "Read.AI", value: false, note: "Sem capacidade médica" },
      { name: "Google Meet/Zoom", value: false, note: "Sem capacidade de análise" },
    ],
  },
  {
    feature: "Sem configuração",
    description: "Pronto para uso imediato, sem necessidade de treinamento ou configuração.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "Uso imediato sem configuração" },
      { name: "Dragon Copilot", value: false, note: "Requer treinamento de voz" },
      { name: "Read.AI", value: true, note: "Configuração simples" },
      { name: "Google Meet/Zoom", value: true, note: "Ativação com um clique" },
    ],
  },
  {
    feature: "Criado por médicos",
    description: "Desenvolvido por profissionais médicos com experiência clínica real.",
    competitors: [
      { name: "HEALTH/HEALTH", value: true, note: "Criado e testado em consultório real" },
      { name: "Dragon Copilot", value: false, note: "Criado por engenheiros de software" },
      { name: "Read.AI", value: false, note: "Foco em reuniões corporativas" },
      { name: "Google Meet/Zoom", value: false, note: "Foco em videoconferência" },
    ],
  },
]

// Logos/ícones para cada competidor (simplificados para este exemplo)
const competitorLogos = {
  "HEALTH/HEALTH": (
    <div className="flex items-center gap-[0.5em]">
      <div className="w-[0.8em] h-[0.8em] bg-[#0d2b4e] rounded-sm"></div>
      <span className="font-bold font-header text-[0.8em]">HEALTH/HEALTH</span>
    </div>
  ),
  "Dragon Copilot": (
    <div className="flex items-center gap-[0.5em]">
      <div className="w-[0.8em] h-[0.8em] bg-gray-300 rounded-sm"></div>
      <span className="font-medium font-header text-[0.75em]">Dragon Copilot</span>
    </div>
  ),
  "Read.AI": (
    <div className="flex items-center gap-[0.5em]">
      <div className="w-[0.8em] h-[0.8em] bg-gray-300 rounded-sm"></div>
      <span className="font-medium font-header text-[0.75em]">Read.AI</span>
    </div>
  ),
  "Google Meet/Zoom": (
    <div className="flex items-center gap-[0.5em]">
      <div className="w-[0.8em] h-[0.8em] bg-gray-300 rounded-sm"></div>
      <span className="font-medium font-header text-[0.75em]">Google Meet/Zoom</span>
    </div>
  ),
}

// Componente para renderizar o valor da comparação
const ComparisonValue = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <div className="w-[1em] h-[1em] bg-green-500 rounded-full"></div>
  } else if (value === false) {
    return <div className="w-[1em] h-[1em] bg-red-400 rounded-full"></div>
  } else {
    return <div className="w-[1em] h-[1em] bg-orange-400 rounded-full"></div>
  }
}

export default function ComparisonCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? comparisonData.length - 1 : prev - 1))
      setIsAnimating(false)
    }, 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === comparisonData.length - 1 ? 0 : prev + 1))
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setDirection(index > currentIndex ? "right" : "left")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  const currentFeature = comparisonData[currentIndex]

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "transition-transform duration-300 ease-in-out",
            isAnimating && direction === "left" && "-translate-x-[5%] opacity-0",
            isAnimating && direction === "right" && "translate-x-[5%] opacity-0",
          )}
        >
          <div className="premium-card p-[2em]">
            <div className="mb-[1.5em]">
              <h3 className="feature-title text-[1.3em] mb-[0.5em]">{currentFeature.feature}</h3>
              <p className="feature-description">{currentFeature.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5em]">
              {currentFeature.competitors.map((competitor, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "p-[1.2em] rounded-lg flex flex-col transition-all duration-300",
                    competitor.name === "HEALTH/HEALTH"
                      ? "bg-[#0d2b4e]/5 order-first md:col-span-2 md:order-none premium-border"
                      : "bg-white/80 premium-border",
                  )}
                >
                  <div className="flex justify-between items-center mb-[0.8em]">
                    <div className="font-bold">{competitorLogos[competitor.name as keyof typeof competitorLogos]}</div>
                    <ComparisonValue value={competitor.value} />
                  </div>
                  <p className="text-[0.8em] text-black/70 mt-auto font-body">{competitor.note}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-[2em]">
              <button onClick={goToPrevious} className="premium-outline-button p-[0.5em] rounded-full">
                <ChevronLeft className="w-[1em] h-[1em]" />
                <span className="sr-only">Anterior</span>
              </button>

              <div className="flex gap-[0.6em]">
                {comparisonData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={cn(
                      "w-[0.5em] h-[0.5em] rounded-full transition-all",
                      idx === currentIndex ? "bg-[#0d2b4e]" : "bg-black/20 hover:bg-black/40",
                    )}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button onClick={goToNext} className="premium-outline-button p-[0.5em] rounded-full">
                <ChevronRight className="w-[1em] h-[1em]" />
                <span className="sr-only">Próximo</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-[50%] left-[0.5em] -translate-y-1/2 z-10">
          <button
            onClick={goToPrevious}
            className="premium-outline-button p-[0.5em] rounded-full bg-white/90 backdrop-blur-md"
          >
            <ChevronLeft className="w-[1em] h-[1em]" />
            <span className="sr-only">Anterior</span>
          </button>
        </div>

        <div className="absolute top-[50%] right-[0.5em] -translate-y-1/2 z-10">
          <button
            onClick={goToNext}
            className="premium-outline-button p-[0.5em] rounded-full bg-white/90 backdrop-blur-md"
          >
            <ChevronRight className="w-[1em] h-[1em]" />
            <span className="sr-only">Próximo</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[1.5em]">
        <div className="flex gap-[0.6em]">
          {comparisonData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "w-[0.5em] h-[0.5em] rounded-full transition-all",
                idx === currentIndex ? "bg-[#0d2b4e]" : "bg-black/20 hover:bg-black/40",
              )}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
