export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t bg-white text-gray-600 text-sm px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2
    ">
      <p className="font-medium text-center md:text-left">
        © {new Date().getFullYear()} Industrial Unit Portal
      </p>

      <p className="text-xs opacity-70 text-center md:text-right">
        Designed & Developed with ❤️
      </p>
    </footer>
  );
}
