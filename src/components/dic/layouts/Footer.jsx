export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-sm px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-medium text-center md:text-left">
          © {new Date().getFullYear()} Industrial Unit Portal
        </p>

        <p className="text-xs opacity-80 text-center md:text-right">
          Designed & Developed by Netcreative Mind
        </p>
      </div>
    </footer>
  );
}
