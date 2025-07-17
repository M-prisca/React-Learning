import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      className={[styles.button, styles[`button_${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
