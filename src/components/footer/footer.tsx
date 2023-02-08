import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/anikse">GitHub</a>
        </li>
      </ul>
      <div>
        <a href="https://qwik.builder.io/" target="_blank" class="builder">
          Made using Qwik
        </a>
      </div>
    </footer>
  );
});
