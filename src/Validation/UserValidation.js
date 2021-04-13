
export function Validate(user,userContext,users){
    let errors=[]
    if(user.firstName==""){
        errors.push('first name is required')
    }
    if(user.lastName==""){
        errors.push('last name is required')
    }
    if(user.email==""){
        errors.push('email is required')
    }
    if(user.password==""){
        errors.push('password is required')
    }
    if(users.some(x=>x.email===user.email && x.id!==user.id)){
        errors.push("Email/Username already exists. Kindly choose other ")
    }

    if(user.id!==null && user.id!==userContext.user.id && userContext.isAdmin){
        errors.push("oops ! sorry you can't modify other users data")
    }
    if(user.id==userContext.user.id && user.isAdmin!==userContext.user.isAdmin && getNoOfAdminProfiles(users)==1){
        errors.push('Kindly allocate admin access to some other user. Then deallocate yourself.')
    }

    return errors

}

const getNoOfAdminProfiles=(users)=>users.reduce((initialcount, user) =>{
    return initialcount + (user.isAdmin === true);
}, 0);