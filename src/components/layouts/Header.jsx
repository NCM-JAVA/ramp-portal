

const Header = () => {

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-40 h-40 object-contain"
          />

          <div className='text-black text-left md:mt-0'>
            <h1 className='text-xl md:text-2xl font-medium text-orange-600'>
              अरुणाचल प्रदेश सरकार
            </h1>
            <h1 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent'>
              Department of <br className='md:inline' /> Industries
            </h1>
            <p className='text-lg md:text-lg text-gray-700 tracking-tight whitespace-nowrap'>
              Government of Arunachal Pradesh
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center">
          <img
            src="/images/Arunachal_Pradesh_Seal.png"
            alt="state_logo"
            className="w-44 h-44 object-contain"
          />
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
