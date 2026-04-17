import React from 'react'
import cls from "./Cards.module.scss"

export const Cards = ({children}) => {
  return (
    <div className={cls.cards}>
        {children}
    </div>
  );
}
