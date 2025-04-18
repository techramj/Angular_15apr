enum Role{
    Admin, User, Guest
}


enum size{
    small = 's',
    medium = 'm',
    large = 'l'
}

let role:Role = Role.Admin;
let role1:Role = 1;

console.log(role1);

let persone:{name:string,age:number} = 
{
    name : 'Jack',
    age : 18
}