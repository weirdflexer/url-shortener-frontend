import NavButton from "../UI/NavButton/NavButton";

const Navigation = () => {
  return (
    <section className="navigation container">
      <NavButton description="Short URL" path="/" />
      <NavButton description="URL Click Counter" path="/url-click-counter" />
      <NavButton description="Unshorten URL" path="/get-original-url" />
    </section>
  );
};

export default Navigation;
