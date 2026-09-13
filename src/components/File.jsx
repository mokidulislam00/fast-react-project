import React from 'react'

export default function File({name, phone, address}) {
  return (
    <div>
<h1>File</h1>
<h2>This is a simple file component</h2>
<h3>{name}</h3>
<p>{phone}</p>
<p>{address}</p>
    </div>
  )
}

