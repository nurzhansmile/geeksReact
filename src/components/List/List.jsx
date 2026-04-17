import React from 'react'
import list from '../../db/data.json'
import { Cards } from '../Cards/Cards';
import Card from '../Card/Card';

export const List = () => {
    const {data} = list
    console.log(data);
    
  return (
    <Cards>
        {
            data.map((el)=>(
               <Card key={el.id} card={el}/>
            ))
        }
    </Cards>
  )
}
