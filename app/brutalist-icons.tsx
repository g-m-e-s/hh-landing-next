export const BrutalistIcons = {
  Mic: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corpo do microfone - mais fino e elegante */}
      <rect x="10" y="2" width="4" height="12" fill="white" stroke="white" strokeWidth="1" />
      {/* Grade do microfone - mais sutil */}
      <rect x="11" y="5" width="2" height="1" fill="white" stroke="white" strokeWidth="0.5" />
      <rect x="11" y="8" width="2" height="1" fill="white" stroke="white" strokeWidth="0.5" />
      <rect x="11" y="11" width="2" height="1" fill="white" stroke="white" strokeWidth="0.5" />
      {/* Base do microfone - mais delicada */}
      <rect x="8" y="14" width="8" height="1" fill="white" />
      <rect x="11.5" y="15" width="1" height="4" fill="white" />
      <rect x="9" y="19" width="6" height="1" fill="white" />
    </svg>
  ),
  Document: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Contorno do documento - mais fino */}
      <rect x="7" y="3" width="10" height="18" stroke="white" strokeWidth="1" fill="none" />
      {/* Linhas de texto - mais sutis */}
      <rect x="9" y="7" width="6" height="1" fill="white" />
      <rect x="9" y="10" width="6" height="1" fill="white" />
      <rect x="9" y="13" width="6" height="1" fill="white" />
      <rect x="9" y="16" width="4" height="1" fill="white" />
      {/* Dobra do papel - detalhe delicado */}
      <path d="M17 3L17 7L13 3" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  ),
  Brain: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Contorno do cérebro - mais delicado */}
      <path
        d="M12 4C9 4 6 6 6 9C6 12 8 14 6 16C4 18 6 20 9 20C12 20 12 18 12 18C12 18 12 20 15 20C18 20 20 18 18 16C16 14 18 12 18 9C18 6 15 4 12 4Z"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      {/* Detalhes internos - mais sutis */}
      <path d="M12 4C12 4 10 8 12 10C14 12 10 14 12 16C14 18 12 20 12 20" stroke="white" strokeWidth="1" fill="none" />
      <path d="M9 10C7 12 9 14 9 14" stroke="white" strokeWidth="1" fill="none" />
      <path d="M15 10C17 12 15 14 15 14" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  ),
  Chart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eixos do gráfico - mais finos */}
      <path d="M5 4L5 19L20 19" stroke="white" strokeWidth="1" />
      {/* Barras do gráfico - mais delicadas */}
      <rect x="8" y="12" width="1" height="7" fill="white" />
      <rect x="12" y="9" width="1" height="10" fill="white" />
      <rect x="16" y="14" width="1" height="5" fill="white" />
      {/* Pontos de dados - detalhe sutil */}
      <rect x="8" y="12" width="1" height="1" fill="white" />
      <rect x="12" y="9" width="1" height="1" fill="white" />
      <rect x="16" y="14" width="1" height="1" fill="white" />
    </svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Contorno do escudo - mais delicado */}
      <path
        d="M12 3L5 6V12C5 16.97 8.31 21.59 12 22C15.69 21.59 19 16.97 19 12V6L12 3Z"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
      {/* Detalhes internos - mais sutis */}
      <path d="M12 6L9 9L10 10L12 8L14 10L15 9L12 6Z" fill="white" />
      <path d="M12 12L9 15L10 16L12 14L14 16L15 15L12 12Z" fill="white" />
    </svg>
  ),
  Check: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Marca de verificação - mais fina e elegante */}
      <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  ),
}
