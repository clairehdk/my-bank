import Button from "../../Button";

const Account = ({ name, balance, color, operations }) => {
  return (
    <div class="account">
      <div>
        <h1>{name}</h1>
        <h2>{balance} €</h2>
      </div>
      <div>
        {operations.map((val, index) => {
          return (
            <div class="money">
              <div>
                <p>{val.date}</p>
                <p>{val.description}</p>
              </div>
              <p>{val.amount}€</p>
            </div>
          );
        })}
        <Button children="SEE MORE" />
      </div>
    </div>
  );
};

export default Account;
