export default function AuthButton({buttonText}){

  function handleButton(){
    // Do handle auth button with link here
  }

  return(
    <>
      <button 
        onClick={handleButton}
        className="border-light rounded-lg cursor-pointer h-13 md:h-12 text-xs flex justify-center 
				items-center w-full md:w-[49%]">
        {buttonText}
      </button>
    </>
  )
}