const putRequest = async (newCar, token, userId) => {
    console.log(token);
  let resData = await fetch (`http://161.35.202.170:8080/cars/${userId}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newCar),
  });
  console.log(resData);
  try {
    if (resData.status === 200) {
      return resData.status;
    } else {
      throw new Error(resData.message);
    }
  } catch (err) {
    console.log(err.message);
  }
  return resData;
};
export default putRequest;
