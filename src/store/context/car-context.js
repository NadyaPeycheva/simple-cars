import { useState,useEffect,createContext } from "react";

const CarContext=createContext({
    cars:[],
    addCar:()=>{},
    deleteCar:()=>{},
});

export const CarContextProvider=(props)=>{
    const [allCars,setAllCars]=useState([]);
    const getAllCars=()=>{
        fetch('http://161.35.202.170:8080/cars/all').then((res)=>{
            res.json().then((data)=>{
                setAllCars(data);
            })
        })
    }

    useEffect(()=>{
       getAllCars();
    },[]);

    const addCar=(car,token)=>{
        fetch('http://161.35.202.170:8080/cars',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${token}`,
            },
            body:JSON.stringify(car)
          }).then((res)=>{
            if(res.status===200){
                getAllCars();
            }else{
                throw new Error('Invalid data')
            }
          })
    }

    const deleteCar=(carId,userId,token)=>{
fetch(`http://161.35.202.170:8080/cars/${carId}/${userId}`,{
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`,
    }
}).then((res)=>{
    if(res.status===200){
        getAllCars();
    }
})
    }


    const contextValue={
        cars:allCars,
        addCar:addCar,
        deleteCar:deleteCar,
    };
    return (
        <CarContext.Provider value={contextValue}>{props.children}</CarContext.Provider>
    )
}
export default CarContext;