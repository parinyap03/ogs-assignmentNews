import React, { useState, useEffect } from "react";
import { Menu, Switch } from "antd";
import {
  HomeOutlined,
  ReadOutlined,
  OrderedListOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { setTheme } from "@store/slice/themeSlice";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
    path: "/homequiz",
  },
  {
    label: "Quiz",
    key: "quiz",
    icon: <ReadOutlined />,
    path: "/quiz",
  },
  {
    label: "Score",
    key: "score",
    icon: <OrderedListOutlined />,
    path: "/score",
  },
  {
    label: "Evaluate the course",
    key: "evaluate",
    icon: <LineChartOutlined />,
    path: "/evaluate",
  },
];

const NavQuiz: React.FC = () => {
  const location = useLocation();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const [current, setCurrent] = useState("1");

  useEffect(() => {
    const path = location.pathname;
    const selectedItem = items.find((item) => item.path === path);
    if (selectedItem) {
      setCurrent(selectedItem.key);
    }
  }, [location]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    dispatch(setTheme(newTheme));
  };

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div className="quizcontent" data-theme={theme}>
        <Menu
          theme={theme}
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="h-[60px] flex items-center  relative"
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
       
        <label className="switch absolute top-[12px] right-10">
          <span className="sun">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ffd43b">
                <circle r="5" cy="12" cx="12"></circle>
                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
              </g>
            </svg>
          </span>
          <span className="moon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </span>
          <input
            type="checkbox"
            className="input"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default NavQuiz;
