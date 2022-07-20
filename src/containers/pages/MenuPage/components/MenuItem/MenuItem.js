import React from "react";
import styles from "./MenuItem.module.scss";

export default function MenuItem({ onClick, text }) {
  return <button  onClick={onClick}>{text}</button>;
}
