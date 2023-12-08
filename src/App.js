import "./App.css";
import { ClientPage } from "./components/ClientPage";
import { Header } from "./components/Header";
import { ProjectPage } from "./components/ProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectPage />,
  },
  {
    path: "/clients",
    element: <ClientPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
