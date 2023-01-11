

export const postRequest=(userData)=>{
    fetch("http://161.35.202.170:8080/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        const response = res.status;
        try {
          if (response === 500) {
            // setHaveErrors((state) => {
            //   return { ...state, username: true };
            // });
            throw new Error(res.message);
          } else if (response === 200) {
            res.json().then((data) => {
                console.log(data);
                return data;
            //   logIn(data.jwtToken, data.user);
            });
            // setUserData(initialUserData);
            // setHaveErrors(initialStateErrors);
            // history.push("/catalog");
          }
        } catch (error) {
          console.log(error);
        }
      });
}