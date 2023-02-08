import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStyles$(styles);

  const { pathname } = useLocation();

  return (
    <header>
      <h2 class="logo">
        <a href="/">Anikse.dev</a>
      </h2>
      <nav>
        <a href="/docs" class={{ active: pathname.startsWith("/docs") }}>
          Docs
        </a>
        <a href="/about" class={{ active: pathname.startsWith("/about") }}>
          About Anikse
        </a>
      </nav>
    </header>
  );
});
