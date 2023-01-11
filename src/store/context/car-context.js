import { useState, useEffect, createContext } from "react";

const CarContext = createContext({
  cars: [],
  addCar: () => {},
  deleteCar: () => {},
  filterCars: () => {},
  changeCar: () => {},
});

export const CarContextProvider = (props) => {
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(allCars);

  const getAllCars = () => {
    fetch("http://161.35.202.170:8080/cars/all").then((res) => {
      res.json().then((data) => {
        setAllCars(data);
        setFilteredCars(data);
      });
    });
  };

  useEffect(() => {
    getAllCars();
  }, []);

  const addCar = (car, userData) => {

    fetch("http://161.35.202.170:8080/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      body: JSON.stringify(car),
    }).then((res) => {
      if (res.status === 200) {
        getAllCars();
      } else {
        throw new Error("Invalid data");
      }
    });
  };

  const deleteCar = (carId, userId, token) => {
    fetch(`http://161.35.202.170:8080/cars/${carId}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        getAllCars();
      }
    });
  };
  const filterCars = (input) => {
    const filteredCars = allCars.filter((car) => {
      return car.make.toLowerCase().includes(input.toLowerCase())||car.model.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredCars(filteredCars);
  };
  const changeCar = (newCar,userData) => {
    fetch(`http://161.35.202.170:8080/cars/${userData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
      body: JSON.stringify(newCar)
    }).then((res)=>{
      if(res.status===200){
        getAllCars();
      }else{
        console.log(res);
      }
    })
  };
  const contextValue = {
    cars: filteredCars,
    addCar: addCar,
    deleteCar: deleteCar,
    filterCars: filterCars,
    changeCar: changeCar,
  };
  return (
    <CarContext.Provider value={contextValue}>
      {props.children}
    </CarContext.Provider>
  );
};
export default CarContext;
