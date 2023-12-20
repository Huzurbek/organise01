import '@/app/ui/global.css';
import Navbar from './ui/navbar/navbar';
import Footer from './ui/footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative flex min-h-screen flex-col ">
          <Navbar />
          <div className="mt-[250px] flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
