"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <div className="flex items-center gap-[0.3em]">
      <div className="w-[0.8em] h-[0.8em] border border-black"></div>
      <span className="font-black font-mono text-[0.7em]">HEALTH/HEALTH</span>
    </div>
  ),
  "Dragon Copilot": (
    <div className="flex items-center gap-[0.3em]">
      <div className="w-[0.8em] h-[0.8em] border border-black"></div>
      <span className="font-bold text-[0.65em] font-mono">Dragon Copilot</span>
    </div>
  ),
  "Read.AI": (
    <div className="flex items-center gap-[0.3em]">
      <div className="w-[0.8em] h-[0.8em] border border-black"></div>
      <span className="font-bold text-[0.65em] font-mono">Read.AI</span>
    </div>
  ),
  "Google Meet/Zoom": (
    <div className="flex items-center gap-[0.3em]">
      <div className="w-[0.8em] h-[0.8em] border border-black"></div>
      <span className="font-bold text-[0.65em] font-mono">Google Meet/Zoom</span>
    </div>
  ),
}

// Componente para renderizar o valor da comparação
const ComparisonValue = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <div className="w-[0.8em] h-[0.8em] border border-green-600"></div>
  } else if (value === false) {
    return <div className="w-[0.8em] h-[0.8em] border border-red-600"></div>
  } else {
    return <div className="w-[0.8em] h-[0.8em] border border-orange-500"></div>
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
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "transition-transform duration-300 ease-in-out",
            isAnimating && direction === "left" && "-translate-x-[5%] opacity-0",
            isAnimating && direction === "right" && "translate-x-[5%] opacity-0",
          )}
        >
          <Card className="backdrop-blur-2xl bg-white/60 border border-black rounded-none p-[1.2em] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.08)]">
            <div className="mb-[1em]">
              <h3 className="text-[1.1em] font-black mb-[0.3em] font-mono">{currentFeature.feature}</h3>
              <p className="text-[0.75em] text-black/70 font-body">{currentFeature.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1em]">
              {currentFeature.competitors.map((competitor, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "border p-[0.8em] rounded-none flex flex-col",
                    competitor.name === "HEALTH/HEALTH"
                      ? "border-black bg-black/5 order-first md:col-span-2 md:order-none shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
                      : "border-black/30 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.05)]",
                  )}
                >
                  <div className="flex justify-between items-center mb-[0.5em]">
                    <div className="font-bold">{competitorLogos[competitor.name as keyof typeof competitorLogos]}</div>
                    <ComparisonValue value={competitor.value} />
                  </div>
                  <p className="text-[0.65em] text-black/70 mt-auto font-body">{competitor.note}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-[1em]">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border border-black p-[0.3em] hover:bg-black hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
              >
                <ChevronLeft className="w-[0.9em] h-[0.9em]" />
                <span className="sr-only">Anterior</span>
              </Button>

              <div className="flex gap-[0.4em]">
                {comparisonData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={cn(
                      "w-[0.4em] h-[0.4em] border border-black transition-all",
                      idx === currentIndex ? "bg-black" : "bg-white hover:bg-black/20",
                    )}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border border-black p-[0.3em] hover:bg-black hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.08)]"
              >
                <ChevronRight className="w-[0.9em] h-[0.9em]" />
                <span className="sr-only">Próximo</span>
              </Button>
            </div>
          </Card>
        </div>

        <div className="absolute top-[50%] left-[0.5em] -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="border border-black bg-white/80 backdrop-blur-md p-[0.3em] hover:bg-black hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]"
          >
            <ChevronLeft className="w-[0.9em] h-[0.9em]" />
            <span className="sr-only">Anterior</span>
          </Button>
        </div>

        <div className="absolute top-[50%] right-[0.5em] -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="border border-black bg-white/80 backdrop-blur-md p-[0.3em] hover:bg-black hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]"
          >
            <ChevronRight className="w-[0.9em] h-[0.9em]" />
            <span className="sr-only">Próximo</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-[0.8em]">
        <div className="flex gap-[0.4em]">
          {comparisonData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={cn(
                "w-[0.4em] h-[0.4em] border border-black transition-all",
                idx === currentIndex ? "bg-black" : "bg-white hover:bg-black/20",
              )}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
