import React from 'react'

const StarComponent=(props)=>{
   var star_table=[]
    for(let i=0;i<5;i++)
     {
       if(props.count<=i)
       star_table.push(<span>☆</span>)
       else
       star_table.push(<span>★</span>)
     }



    return(
      <span>{star_table}</span>
     )


}
export default StarComponent 