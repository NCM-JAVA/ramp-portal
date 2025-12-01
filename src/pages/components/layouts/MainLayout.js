import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <div className="pt-16"> {/* to prevent content from hiding behind fixed header */}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
