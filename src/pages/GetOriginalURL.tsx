import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Section from "../components/UI/Section/Section";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import isValidUrl from "../utils/isValidUrl";

const GetOriginalURL = () => {
  const [url, setUrl] = useState<string>("");

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
    toast.info("Don't use this huge link(", {
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

  const getOriginalURL = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const url_json = {
      url: url,
    };

    try {
      const response = await fetch("http://127.0.0.1/api/original_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;",
        },
        body: JSON.stringify(url_json),
      });

      const json = await response.json();

      if (json.status_code === 200) {
        setUrl(json.original_url);
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
          title="Unshorten URL"
          description="Enter the short URL to check the destination page."
          url={url}
          stateFn={setUrl}
          buttonInfo="Get count"
          fn={getOriginalURL}
          validateFn={isValidUrl}
        />
        <Navigation />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default GetOriginalURL;
