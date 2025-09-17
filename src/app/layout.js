import './globals.css';
import Navbar from '@/components/Navbar';
import AOSProvider from '@/components/AOSProvider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Raport Digital - Solusi Penilaian Sekolah Modern',
  description: 'Raport Digital adalah platform modern untuk penilaian sekolah, membantu guru mengelola data siswa dan menghasilkan raport dengan mudah.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AOSProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer/>
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}