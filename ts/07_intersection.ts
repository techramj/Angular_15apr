type FileData = {
    path:string;
    content:string;
}

type DbData = {
    url:string;
    credentials:string;

}

type Data = FileData & DbData;

let data1:Data = {
    path:'', content:'', url:'', credentials:''
}