export function Validate(project){
    let errors=[]
    if(project.name==""){
        errors.push('project name is required')
    }
    if(project.detail==""){
        errors.push('project detail is required')
    }
   
    return errors
    
}