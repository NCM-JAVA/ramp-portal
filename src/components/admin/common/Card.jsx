const Card = ({ title, value, subtitle, gradient, icon }) => {
  return (
    <div
      className={`p-4 sm:p-6 rounded-xl shadow-md text-white ${gradient}
      hover:shadow-lg transition-all duration-200`}
    >
      {/* <h3 className="text-base sm:text-lg font-semibold">{title}</h3> */}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold">
          {title}
        </h3>

        {/* Icon */}
        <span className="text-xl sm:text-2xl opacity-90">
          {icon}
        </span>
      </div>

      <p className="text-3xl sm:text-4xl font-bold mt-2 sm:mt-3">
        {value}
      </p>

      <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-90">
        {subtitle}
      </p>
    </div>
  );
}

export default Card;