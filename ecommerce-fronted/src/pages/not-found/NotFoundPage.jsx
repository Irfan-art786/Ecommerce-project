import Header from "../../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <title>404 Page Not Found</title>

      <Header cart={cart} />

      <div className="not-found-message">Page not found</div>
    </>
  );
}
