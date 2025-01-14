import "../styles/footer.css";
import ExternalLink from "./svg/external-link";

export default function Footer() {
  return (
    <footer>
      <p>
        This project is made by:
        <a href="https://github.com/Viktotovich">
          {" "}
          Vlad <ExternalLink />
        </a>
        . As a stepping stone for better React applications.
      </p>
    </footer>
  );
}
