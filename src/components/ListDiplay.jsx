import React from 'react'
import {Link} from 'react-router-dom'
import '../../src/index.css'
import { Input } from 'antd';
import { Button } from 'antd/lib/radio';

const ListDisplay = ({createTask,onChange,deleteItem,lista=[]})=>{ 
    return(
        <div> 
            <header className="header">
                <div id="tit">
                   <Link to="/list"><h1 className="title"><i className="fas fa-star"></i>HIT-LIST</h1></Link>
                    <h2 className="subt">TO GET SHIT DONE</h2> 
                </div>
                <div className="toInput">
                    <Input placeholder="Ingresa una tarea" className="input" onChange={onChange}></Input>
                    <Button onClick={createTask}>Add</Button>
                </div>
                
            </header>
            <div className="contenedor">
            <section>
            {lista.map((b, key)=>{
                return <div className="item"
                    key={key}> 
                    <span className="number">{key+1}</span>{lista[key]}
                    <span className="deleteIcon" onClick={key=>deleteItem(b)}><i className="fas fa-trash-alt"></i></span>
                    </div>
                })} 
            </section>
        </div>
        </div>
        
    )
}

export default ListDisplay