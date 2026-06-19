export default function SubmitButton({
  img, 
  buttonText, 
  color, 
  bg, 
  handleOnclick, 
  order = "left-to-right", 
  border = false, 
  ...props
}){
  return order === "left-to-right" ?
    (<button
      {...props}
      onClick={handleOnclick}
      type="button"
      className={`rounded-xl ${bg} ${color} h-11.5 w-full flex gap-3  justify-center 
			cursor-pointer items-center ${border && `${border}`} border `}
    > { img && <img src={img} alt="" />}
      { buttonText && <p className={`${color}`}>{buttonText}</p> }
    </button> ) :
    (<button
      {...props}
      onClick={handleOnclick}
      type="button"
      className={`rounded-xl ${bg} ${color} h-11.5 w-full flex gap-3  justify-center 
			cursor-pointer items-center ${border && border} border `}
    >
      { buttonText && <p className={`${color}`}>{buttonText}</p> }
      { img && <img src={img} alt="" />}
    </button>)
}