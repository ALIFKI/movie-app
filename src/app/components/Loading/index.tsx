import { FC } from "react";


export interface LoadingProps {
  isLoading : boolean
}

const Loading: FC<LoadingProps> = ({isLoading})=>{

  return (
    <>
      {
        isLoading ? (
          <div className="lds-ellipsis">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        ) : null
      }
    </>
  )
}

export default Loading