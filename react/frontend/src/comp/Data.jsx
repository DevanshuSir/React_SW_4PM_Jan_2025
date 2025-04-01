function Data(props) {
  console.log(props);
  const { allUser } = props;
  return (
    <>
      {allUser.map((value, index) => (
        <>
          <h1>UserName :- {value.userName}</h1>
          <h2>Age :- {value.age}</h2>
        </>
      ))}
    </>
  );
}

export default Data;
