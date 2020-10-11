
import React from 'react'

export default function PokemonList({gotoNextPage, gotoPrevPage}){
  return(
    <div>
      {gotoPrevPage &&<button onClick={gotoPrevPage}>previous</button>}
      {gotoNextPage &&<button onClick={gotoNextPage}>next</button>}
    </div>
  )
}
