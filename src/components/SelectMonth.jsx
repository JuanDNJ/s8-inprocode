import { getDispacth, getSelector } from "../store";
import { getWeekBalance } from "../store/slices/balance";
import { getMonthInCurrent, getMontsByYear } from "../utils";

export default function SelectMonth() {
  const months = getMontsByYear("en");
  const { balance } = getSelector((state) => state.balance);
  const dispatch = getDispacth();
  const handlerChangeMonth = (event) => {
    const month = event.target.value.toLowerCase();
    const monthApp = balance[month].weeks[0];
    dispatch(getWeekBalance(monthApp));
  };

  return (
    <article>
      <h3 className="text-stone-900">Selecciona mes</h3>
      <select
        onChange={handlerChangeMonth}
        className="text-stone-900"
        defaultValue={getMonthInCurrent("en")}
      >
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
    </article>
  );
}
