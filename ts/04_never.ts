function logAndThrow(errMsg:string):never{
    console.log('Error:', errMsg);
    throw new Error(errMsg);
}

logAndThrow('Error: Something went wrong!');