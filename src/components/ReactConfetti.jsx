import React from 'react';

import ReactConfetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'


export default function Confetti() {
  const { width, height } = useWindowSize()

  {/* Contenedor de otros elementos */}
  {/* ...otros elementos... */}

  {/* Componente ReactConfetti */}
  <ReactConfetti
    width={width} // Ancho de la ventana
    height={height} // Alto de la ventana
    numberOfPieces={200} // Número de piezas de confetti
    tweenDuration={5000} // Duración de 5 segundos
    colors={['#f44336', '#e91e63', '#9c27b0']} // Colores del confetti
    // ...otras propiedades...
  />
}