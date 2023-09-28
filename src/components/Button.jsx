const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button 
      className={
        `flex justify-center 
        items-center gap-2 px-7 py-3
        border font-montserrat 
        text-base leading-none rounded-full transition
        ${fullWidth && "w-full"}
        ${
          backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-200`
          : "bg-coral-red text-white border-coral-red hover:bg-red-600"}`
      }>
      {label}
      {
        iconURL && <img 
            src={iconURL} 
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
      }
    </button>
  )
}

export default Button