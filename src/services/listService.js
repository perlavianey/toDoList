import axios from 'axios'

const url = 'http://front-test.tide.mx/api'


//Traer la lista según su ID
export const getList = (listId) => {
    return axios.get(url + `/task_lists/${listId}`)
    .then(items=>{
        return items
    })
    .catch(error=>{
        return error
    })
}

export const addItemtoList = (listId,item)=>{
    return axios.post(url+`/tasks`,{
        headers:{
            'Content-type':'application/json'
        },
        name:item,
        taskList:listId,
        limitDate:"2018-01-24T20:30",
        endDate:"2018-01-24T20:30"
    })
    .then(result=>{
        return result
    })
    .catch(error=>{
        return error
    })

    
}
