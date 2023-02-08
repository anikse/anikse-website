import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Anikse: open source UGC initiative</h1>
      <ul>
        <li>Anikse is derived from greek word Άνοιξε, which means 'open'</li>
        <li>
          Anikse goal is simple: allow creators to publish games and VR/AR
          experiences, then enjoy them together with friends
        </li>
      </ul>
      <h2>Idea</h2>
      <ul>
        <li>
          Avoid too deep centralization, like in Steam, Epic Games Store, Oculus
          Store
        </li>
        <li>
          Reuse existing infrastructure, like Github, VS Code extensions, npm
        </li>
        <li>
          Reuse existing open source renderers and editors like BabylonJS,
          Godot, etc
        </li>
        <li>
          Base on standard web technologies, like WebXR, WebRTC, Websockets,
          WebAssembly
        </li>
        <li>
          Support minimal infrastructure to browse and matchmake multiplayer
          games, P2P-first
        </li>
        <li>
          Keep all essential code open source, so that anyone can contribute and
          it can never be closed
        </li>
      </ul>
      <h2>Progress</h2>
      This is pretty much a hobby project, so progress is slow and at the moment
      only this page is available, I am still in design and POC phase.
      <ul>
        <li>
          <sl-badge variant="neutral">Draft</sl-badge> VS Code extension for
          creators
        </li>
        <li>
          <sl-badge variant="neutral">Draft</sl-badge> Games Registry
        </li>
        <li>
          <sl-badge variant="neutral">Draft</sl-badge> Games Browser
        </li>
        <li>
          <sl-badge variant="neutral">Draft</sl-badge> P2P Multiplayer SDK
        </li>
        <li>
          <sl-badge variant="neutral">Draft</sl-badge> P2P Hosts Registry
        </li>
      </ul>
      <a href="/docs">More Info</a>
      <h2>Sources</h2>
      <ul>
        <li>
          <span>Github organisation </span>
          <a href="https://github.com/anikse" target="_blank">
            https://github.com/anikse
          </a>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Anikse: open source UGC initiative",
};
