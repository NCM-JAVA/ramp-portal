import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-44 px-4 md:px-0">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
