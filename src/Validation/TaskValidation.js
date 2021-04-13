export function Validate(task){
    let errors=[]
    if(task.name==""){
        errors.push('task name is required')
    }
    if(task.detail==""){
        errors.push('task detail is required')
    }
    if(task.userId==""){
        errors.push('user is required')
    }
    if(task.statusId==""){
        errors.push('status is required')
    }
    
    return errors
    
}