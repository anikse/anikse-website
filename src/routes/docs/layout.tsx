import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import Menu from "~/components/menu/menu";
import OnThisPage from "~/components/on-this-page/on-this-page";
import styles from "./docs.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="docs">
      <Menu />
      <article>
        <sl-alert variant="primary" open>
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <strong>Status: Design Phase</strong>
          <br />
          This documentation is here to show and explain the ideas, development
          is not started yet.
        </sl-alert>
        <Breadcrumbs />
        <Slot />
      </article>
      <OnThisPage />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
