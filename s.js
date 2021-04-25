var app = require('json-to-markdown');
const clipboardy = require('clipboardy');

var columns = [
    {key: 'a', label: '字段'},
    {key: 'b', label: '类型'},
    {key: 'd', label: '描述'},
];

const body={
    created_at: "2019-12-27 19:48:16",
    department_id: 13,
    email: "",
    email_verified_at: null,
    id: 2,
    last_login_at: "2021-04-23 18:00:58",
    last_login_ip: "172.31.38.0",
    name: "test",
    nickname: "测试",
    permissions: [],
    position: "test",
    roles: [],
    status: 1,
    tel: "1365478965",
    updated_at: "2021-04-23 18:00:58"
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
    c:''
}))

var tableMdString = app(object, columns);
clipboardy.writeSync(tableMdString);

console.log(tableMdString)