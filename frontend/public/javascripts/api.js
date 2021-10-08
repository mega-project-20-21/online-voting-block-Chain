const urls = 'http://localhost:8000/'
function login(data){
    return fetch({
        url:urls,
        method:'POST',
        body:data,
    }).then((r)=>r.json())
}
function voting (data){
    
    return fetch({
        url:urls,
        method:'POST',
        body:data,
    }).then((r)=>r.json())
}