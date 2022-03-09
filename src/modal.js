import React from "react"

export default function Modal({ text, isOpen, toggleClick, className }) {
  return (
    <div className={className} style={{ display: isOpen ? "block" : "none" }}>
      <div className={`${className}-voile`}>
      </div>
      <div className={`${className}-content`}>
        <div className={`${className}-text`}>
          <span className={`${className}-close`} onClick={toggleClick}> X</span>
          {text}
        </div>
      </div>
    </div>
  )
}
