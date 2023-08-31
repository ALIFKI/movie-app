import { FC } from "react";
import Loading from "./components/Loading";


const LoadingPage : FC<any> = ()=>{
  return (
  <div className="flex fixed inset-0 z-[999] bg-[rgba(0,0,0,0.8)] overflow-hidden justify-center items-center">
    <Loading isLoading={true}></Loading>
  </div>
  )
}


export default LoadingPage;