import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.0.0-alpha.2/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main class="page">
        <article>
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <p>
            <small>
              <time
                >${format(
                  entry.getIn(["data", "date"], new Date()),
                  "MMM D, YYYY"
                )}</time
              >
            </small>
          </p>
          <p class="post-summary">${entry.getIn(["data", "summary"], "")}</p>
          ${this.props.widgetFor("body")}
        </article>
      </main>
    `;
  }
});

export default Post;
