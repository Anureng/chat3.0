import "@/styles/globals.css";
import { ChatAppProvider } from "context/ChatAppContext";
import { BrowserRouter } from "react-router-dom";

function App({ Component, pageProps }) {
  return (
    <ChatAppProvider>
      {" "}
      <Component {...pageProps} />
    </ChatAppProvider>
  );
}
export default App;
