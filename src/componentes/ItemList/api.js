export function fetchData (){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            fetch("./productos.js")
            .then(Response => {
                if (Response.ok){
                    throw new Error(`Error no se pueden cargar los productos`);
                }
                return Response.json()
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
        }),1000
    })
}