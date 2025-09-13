'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 100, // Menggeser titik aktivasi animasi
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Efek transisi
      once: true, // Animasi hanya berjalan sekali
    });
  }, []);

  return <>{children}</>;
}