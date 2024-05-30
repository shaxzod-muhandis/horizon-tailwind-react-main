import {Navigate, useNavigate} from "react-router-dom";

export const Private = ({children}) => {

    console.log(!localStorage.getItem('token'))

    if(!localStorage.getItem('token')){
      return  <Navigate
        to={`/auth`}
        />
    }else{
        console.log(1)
    }

    return (
        <>
            {children}
        </>
    )
}