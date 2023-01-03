import './button.scss'
import {FaArrowDown,FaArrowRight} from "react-icons/fa"

export const ArrowDownButton = () => {
  return (
    <FaArrowDown className='arrowDown'/>
  )
}

export const ArrowRightButton = () => {
  return (
    <FaArrowRight className='arrowRight'/>
  )
}

export const CustomButton = ({children}) => {
  return (
    <button className="btn"> 
      {children}
    </button>
  )
}

