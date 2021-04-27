import data from "../../data.json";

import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          <div class="container">
            <Account
              name={elem.name}
              balance={elem.balance}
              color={elem.color}
              operations={elem.operations}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Accounts;
