import React, {Component} from 'react'
//import {searchList} from '../services/listService'
import { message } from 'antd'
import ListDisplay from './ListDiplay'


message.config({top: "400px", duration: 2, maxCount: 3,});

class ListContainer extends Component{

    state = {
        item:"",
        lista:[]
    }

    //Crear item
    createTask=()=>{

        const {item}=this.state
        if(item===""){
            message.error("Introduzca una tarea para agregarla a la lista.")
        }
        else{
            let {lista}=this.state
            lista.push(item)
            this.setState({lista})

        }

    }

    onChange = (e) => {
        const value = e.target.value
        let {item} = this.state
        item = value
        this.setState({item})
    }

    deleteItem=(key)=>{
        console.log(key)
    }
     
    
    render(){
        const {lista} = this.state
        return(
            <div>
              <ListDisplay
                createTask={this.createTask}
                onChange={this.onChange}
                lista={lista}
                deleteItem={this.deleteItem}
              />
            </div>
        )
    }
}

export default ListContainer