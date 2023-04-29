import React from "react";
import {Link, Outlet} from "react-router-dom";
export const Layout: React.FC = () =>{
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Сейчас</Link>
          </li>
          <li>
            <Link to="/today">Сегодня</Link>
          </li>
          <li>
            <Link to="/tomorrow">Завтра</Link>
          </li>
          <li>
            <Link to="/3days">3 дня</Link>
          </li>
          <li>
            <Link to="/7days">Прогноз на неделю</Link>
          </li>
          <li>
            <Link to="/14days">Прогноз на 14 дней</Link>
          </li>
          <li>
            <Link to="/month">Прогноз на месяц</Link>
          </li>
          <li>
            <Link to="/weekend">Выходные</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
