import RowInput from "./RowInput";
import { useContext } from "react";
import CarContext from "../../store/context/car-context";

const ChangeRow = ({ defaultValues, changeModal, carId }) => {
  const { changeCar } = useContext(CarContext);

  return (
    <RowInput request={changeCar} changeModel={changeModal} carId={carId} defaultValues={defaultValues} />
  );
};
export default ChangeRow;
