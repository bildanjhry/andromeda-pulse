import { useState } from "react";

export default function useMediaQuery(query){	
  const [isTrue, setIsTrue] = useState(window.matchMedia(query).matches)
  return isTrue
}