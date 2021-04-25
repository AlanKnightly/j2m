var app = require('json-to-markdown');
const clipboardy = require('clipboardy');



var columns = [
    {key: 'a', label: '字段'},
    {key: 'b', label: '类型'},
    {key: 'c', label: '必填'},
    {key: 'd', label: '描述'},
];

const body={
    current_pass: "test123",
    password: "123456",
    password_confirmation: "123456"
}
const checkType = (value)=>{
    if(value == null){
        return '待确认'
    }
    if(Array.isArray(value)){
        if(value.length==0){
            return '待确认[]'
        }else{
            return typeof value +'[]'
        }
    }
    return typeof value
}
const object= Object.keys(body).map(k=>({
    a:k,
    b: checkType(body[k]),
    c:'',
    d:''
}))

var tableMdString = app(object, columns);
clipboardy.writeSync(tableMdString);

console.log(tableMdString)