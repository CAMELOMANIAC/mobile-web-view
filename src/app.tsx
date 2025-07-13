import { type AnyRouter, RouterProvider } from "@tanstack/react-router";

import { useAuthGetState } from "./store/useAuthStore";

const App = ({ router }: { router: AnyRouter }) => {
  const auth = useAuthGetState((state) => state);
  return <RouterProvider router={router} context={{ auth }} />;
};

export default App;
