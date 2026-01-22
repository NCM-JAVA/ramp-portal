import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DirectorateLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard Overview");
  const [pageSubTitle, setPageSubTitle] = useState("Welcome to Industrial Unit Portal");
  const [actionButton, setActionButton] = useState(null);
  const [backButton, setBackButton] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggleSidebar} />

      <div
        className={`
          flex flex-col flex-1 min-h-screen bg-gray-100
          transition-all duration-300
          ${isOpen ? "ml-64" : "ml-0 md:ml-64"}
        `}
      >

        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-grow pt-10 px-4 md:px-8 pb-10">

          <div className="space-y-6">

            {/* <div className="p-6 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-3">

                {backButton && (
                  <div className="cursor-pointer">
                    {backButton}
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold">{pageTitle}</h2>
                  <p className="opacity-90">{pageSubTitle}</p>
                </div>

              </div>

              {actionButton && (
                <div className="mt-4 md:mt-0">
                  {actionButton}
                </div>
              )}
            </div> */}


            <Outlet context={{ setPageTitle, setPageSubTitle, setActionButton, setBackButton }} />
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DirectorateLayout;