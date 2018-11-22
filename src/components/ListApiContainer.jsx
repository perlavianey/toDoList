import React, {Component} from 'react'
import {getList,addItemtoList} from '../services/listService'
import { message } from 'antd'
import ListApiDisplay from './ListApiDisplay'


message.config({top: "400px", duration: 2, maxCount: 3,});

class ListApiContainer extends Component{

    state = {
        idLista:"",
        lista:[],
        item:""
    }

    //Traer la lista
    getList=()=>{
        const {idLista}=this.state
        if(idLista===""){
            message.error("Introduzca el ID de una lista para mostrarla")
        }
        else{
            console.log(idLista)
            getList(idLista)
            .then(tasks=>{
                let tareas=tasks.data.tasks
                let arrTareas=[]
                for(let i=0; i<tareas.length; i++){
                    arrTareas.push(tareas[i].name)
                }
                let {lista}=this.state
                lista=arrTareas
                this.setState({lista})
            })
        }
    }

    //Agregar elemento
    addItem=()=>{
        const {item}=this.state
        if(item===""){
            message.error("Introduzca una tarea para agregarla a la lista.")
        }
        else{
            const {idLista}=this.state
            let {lista}=this.state
            lista.push(item)
            this.setState({lista})
            addItemtoList(idLista,item)
            .then(r=>{
                console.log(r)
                
            })
            .catch(e=>{
                return message.error("No se pudo añadir, favor de intentarlo más tarde.")
            })
        }
    }

    onChange = (e) => {
        const value = e.target.value
        let {idLista} = this.state
        idLista = value
        this.setState({idLista})
    }

    onChangeItem = (e) =>{
        const value = e.target.value
        let {item} = this.state
        item = value
        this.setState({item})
    }

    deleteItem=(e)=>{
        console.log(e.target)
        const id=e.target.id
        console.log(id)
    }
     
    
    render(){
        const {lista} = this.state
        return(
            <div>
              <ListApiDisplay
                getList={this.getList}
                onChange={this.onChange}
                lista={lista}
                deleteItem={this.deleteItem}
                onChangeItem={this.onChangeItem}
                addItem={this.addItem}
              />
            </div>
        )
    }
}

export default ListApiContainer