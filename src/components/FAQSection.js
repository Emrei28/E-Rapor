"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apakah Raport Digital aman untuk data siswa?',
      answer: 'Ya, kami menggunakan enkripsi tingkat tinggi dan autentikasi aman untuk melindungi data siswa Anda.',
    },
    {
      question: 'Seberapa mudah menggunakan Raport Digital?',
      answer: 'Antarmuka intuitif kami dirancang untuk guru, memungkinkan input data dan nilai hanya dalam beberapa klik.',
    },
    {
      question: 'Bisakah raport diekspor ke PDF?',
      answer: 'Tentu! Anda dapat menghasilkan raport PDF profesional dengan sekali klik, siap cetak atau bagikan.',
    },
    {
      question: 'Apakah ada dukungan untuk pengguna baru?',
      answer: 'Kami menyediakan panduan lengkap dan tim dukungan yang siap membantu Anda kapan saja.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-sky-200 shadow-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left text-gray-900 font-semibold hover:bg-sky-50 transition-colors duration-200"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faQuestionCircle} className="text-sky-600 w-6 h-6 mr-3" />
                  <span>{faq.question}</span>
                </div>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className={`text-sky-600 w-5 h-5 transform transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-40 p-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}