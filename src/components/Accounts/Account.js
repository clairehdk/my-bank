import Button from "../../Button";

const Account = ({ name, balance, color, operations }) => {
  return (
    <div class="account">
      {color === "#1976D2" && (
        <div class="blue">
          <h1>{name}</h1>
          <h2>{(Math.round(balance * 100) / 100).toFixed(2)}€</h2>
        </div>
      )}
      {color === "#C2185B" && (
        <div class="pink">
          <h1>{name}</h1>
          <h2>{balance} €</h2>
        </div>
      )}
      <div>
        {operations.map((val, index) => {
          return (
            <div class="money">
              <div>
                <p>{val.date}</p>
                <p>{val.description}</p>
              </div>
              <p>{(Math.round(val.amount * 100) / 100).toFixed(2)}€</p>
            </div>
          );
        })}
        <Button children="SEE MORE" />
      </div>
    </div>
  );
};

export default Account;
