"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"initial" | "mic" | "typing" | "complete">("initial")
  const [typedText, setTypedText] = useState("")
  const fullText = "HEALTH/HEALTH"

  useEffect(() => {
    // Inicia a sequência de animação
    const timeline = async () => {
      // Começa com a tela em branco
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mostra o microfone
      setStage("mic")
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Começa a digitar
      setStage("typing")

      // Efeito de digitação
      for (let i = 0; i <= fullText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setTypedText(fullText.substring(0, i))
      }

      // Pequena pausa após terminar de digitar
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Completa a animação
      setStage("complete")
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Chama o callback para mostrar a landing page
      onComplete()
    }

    timeline()
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Microfone com ondas de áudio */}
        <div
          className={cn(
            "transition-all duration-500 ease-in-out transform",
            stage === "initial" && "opacity-0 scale-50",
            stage === "mic" && "opacity-100 scale-100",
            (stage === "typing" || stage === "complete") && "opacity-100 scale-100 mb-6",
          )}
        >
          <div className="relative">
            {/* Microfone moderno */}
            <div className="w-[4em] h-[4em] bg-black rounded-full flex items-center justify-center shadow-lg">
              {/* Corpo do microfone */}
              <div className="w-[1.8em] h-[2.6em] bg-white/90 rounded-md relative">
                {/* Topo do microfone */}
                <div className="absolute -top-[0.6em] left-1/2 -translate-x-1/2 w-[2em] h-[0.6em] bg-white/90 rounded-t-md"></div>
                {/* Grade do microfone */}
                <div className="absolute top-[0.4em] left-1/2 -translate-x-1/2 w-[1.4em] h-[1em] bg-black/80 rounded-sm">
                  <div className="w-full h-[0.15em] bg-white/70 mt-[0.25em]"></div>
                  <div className="w-full h-[0.15em] bg-white/70 mt-[0.25em]"></div>
                </div>
              </div>
            </div>

            {/* Ondas de áudio animadas em estilo moderno */}
            {stage === "mic" && (
              <>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5em] h-[5em] border-2 border-black/20 rounded-full animate-ping-brutal"
                  style={{ animationDuration: "1.5s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6em] h-[6em] border-2 border-black/10 rounded-full animate-ping-brutal"
                  style={{ animationDuration: "1.8s" }}
                ></div>
              </>
            )}
          </div>
        </div>

        {/* Texto digitado */}
        <div
          className={cn(
            "font-black text-[2.2em] font-mono tracking-tight transition-all duration-500",
            (stage === "initial" || stage === "mic") && "opacity-0",
            (stage === "typing" || stage === "complete") && "opacity-100",
          )}
        >
          {typedText}
          {stage === "typing" && (
            <span className="inline-block w-[0.4em] h-[0.8em] bg-black ml-1 animate-blink rounded-sm"></span>
          )}
        </div>
      </div>
    </div>
  )
}
