import Header from "../components/Header/Header";
import Section from "../components/UI/Section/Section";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import isValidUrl from "../utils/isValidUrl";

function App() {
  const [url, setUrl] = useState<string>("");
  const text = `ShortURL is a free tool to shorten URLs and generate short links
  URL shortener allows to create a shortened link making it easy to share`;

  const warningNotify = () =>
    toast.error("Oops! Something went wrong🤪", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const infoNotify = () =>
    toast.info("Your link has been generated🥳🎉", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const getShortURL = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url_json = {
      url: url,
    };

    try {
      const response = await fetch("http://127.0.0.1/api/shorten/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;",
        },
        body: JSON.stringify(url_json),
      });

      const json = await response.json();

      if (json.status_code === 200) {
        setUrl(json.short_url);
        infoNotify();
      } else {
        throw new Error("Server bad!");
      }
    } catch {
      warningNotify();
      return;
    }

    return;
  };

  return (
    <>
      <Header />
      <main>
        <Section
          title="Paste the URL to be shortened"
          url={url}
          description={text}
          stateFn={setUrl}
          fn={getShortURL}
          buttonInfo="Shorten URL"
          validateMessage="Incorrect URL format"
          validateFn={isValidUrl}
        />
        <Navigation />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
