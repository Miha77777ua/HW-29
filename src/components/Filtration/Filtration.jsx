import { useSelector } from "react-redux";
import style from "./Filtration.module.scss";

export function Filtration({ handleFiltration }) {
  const filter = useSelector(store => store.filter);

  return (
    <div className={style.filtration}>
      <p className={style.filtration__desc}>Find contacts by name</p>
      <input type="text" className={style.filtration__input} value={filter} onChange={handleFiltration} />
    </div>
  )
}
