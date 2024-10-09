import React from 'react'
import Header from "../components/Header";

function LayoutHeader({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default LayoutHeader
