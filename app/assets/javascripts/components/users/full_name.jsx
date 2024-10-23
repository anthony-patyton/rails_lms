const UserFullName = ( user ) => {
  const { first_name, last_name } = user;
  const name = first_name + " " + last_name;
  return(<div>{name}</div>)
};

