import { useState, useEffect, createContext } from "react";
import postRequest from "../../api/postRequest";
import putRequest from "../../api/putRequest";

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

    postRequest("cars", car, userData.token).then((result) => {
      if (result === 200) {
        getAllCars();
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
      return (
        car.make.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilteredCars(filteredCars);
  };
  const changeCar = (newCar, userData) => {
    putRequest(newCar,userData.token,userData.id).then((response) => {
      if(response===200){
        getAllCars();
      }
    })
    // fetch(`http://161.35.202.170:8080/cars/${userData.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userData.token}`,
    //   },
    //   body: JSON.stringify(newCar),
    // }).then((res) => {
    //   if (res.status === 200) {
        
    //   } else {
    //     console.log(res);
    //   }
    // });
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
