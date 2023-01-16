
const postRequest = async (url, userData,token) => {
  let result;
  let options={
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
   },
   body: JSON.stringify(userData),
  }
  if(token){
    options.headers.Authorization=`Bearer ${token}`
  }

  let resData = await fetch(`http://161.35.202.170:8080/${url}`, options);
  if (url === "users/login") {
    result = await resData.json();
  } else {
    result = resData.status;
  }

  try {
    if (resData.status !== 200) {
      throw new Error(resData.message);
    } else {
      return result;
    }
  } catch (err) {
    console.log("error", err.message);
  }

  return result;
};
export default postRequest;
