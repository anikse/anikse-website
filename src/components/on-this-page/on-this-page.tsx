import { useContent, useLocation } from "@builder.io/qwik-city";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./on-this-page.css?inline";

export default component$(() => {
  useStyles$(styles);

  const { headings } = useContent();
  const contentHeadings =
    headings?.filter((h) => h.level === 2 || h.level === 3) || [];

  const { pathname } = useLocation();
  const editUrl = `https://github.com/anikse/anikse-website/edit/main/src/routes${pathname}/index.mdx`;

  return (
    <aside class="on-this-page">
      <div class="stick-toc">
        {contentHeadings.length > 0 ? (
          <>
            <h6>On This Page</h6>
            <ul>
              {contentHeadings.map((h) => (
                <li>
                  <a
                    href={`#${h.id}`}
                    class={{
                      block: true,
                      indent: h.level > 2,
                    }}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h6>More</h6>
        <ul>
          <li>
            <a href={editUrl} target="_blank">
              Edit this page
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank">
              Join our community
            </a>
          </li> */}
          <li>
            <a href="https://github.com/anikse" target="_blank">
              GitHub
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank">
              @QwikDev
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
});
