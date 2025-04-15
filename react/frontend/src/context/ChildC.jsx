import React, { useContext } from "react";
import { data, userAge } from "../App";

const ChildC = () => {
  const user = useContext(data);
  const age = useContext(userAge);

  return (
    <div>
      Child-C {user} Age :- {age}
      {/* <data.Consumer>
        {(name) => {
          return (
            <userAge.Consumer>
              {(age) => {
                return (
                  <>
                    <h1>
                      Child-C {name} Age :- {age}
                    </h1>
                  </>
                );
              }}
            </userAge.Consumer>
          );
        }}
      </data.Consumer> */}
    </div>
  );
};

export default ChildC;
