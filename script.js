const data=[{
    title:'Aprendiendo JS',
    year: '2021'
},
{
    title:'Aprendiendo CSS',
    year: '2022'
}
];



function getData(){
    return new Promise((resolve, reject) =>{
        if(data[0].year==='2021'){
           reject (new Error('El 2022 no cuenta'))
        }

        setTimeout(()=>{
            resolve (console.log(data[0].year))
        }, 2000)
    })
}
getData()
    .then((Response)=> console.log(response))
    .catch((err)=> console.log(err.message))





// El metodo setTimeOut es estable un temporizador en milisegundos para ejecutar una funcion callback al acabar 
// el timpo 
// SINTAXIS: 1- funcion a ajecutar 2- el tiempo en milisegundos 