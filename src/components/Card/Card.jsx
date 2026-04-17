import React from "react";
import cls from "../Card/Card.module.scss"
import { message } from "antd";
const Card = ({card }) => {
  const {id, title} = card
  const onClick = (e, id)=>{
    message.info(`Card ${id}`)
  }
   return (
    <div className={cls.card} onClick={(e)=> onClick(e, id)}>
      <h2 className={cls.title}>{`Card ${id}`}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Card;
