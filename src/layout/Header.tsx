import {Link} from "react-router-dom";
import React from "react";
import "./header.css";
export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="header-link">Сегодня</Link>
          </li>
          <li>
            <Link to="/tomorrow" className="header-link">Завтра</Link>
          </li>
          <li>
            <Link to="/3days" className="header-link">3 дня</Link>
          </li>
          <li>
            <Link to="/7days" className="header-link">Прогноз на неделю</Link>
          </li>
          <li>
            <Link to="/14days" className="header-link">Прогноз на 14 дней</Link>
          </li>
          <li>
            <Link to="/month" className="header-link">Прогноз на месяц</Link>
          </li>
          <li>
            <Link to="/weekend" className="header-link">Выходные</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
