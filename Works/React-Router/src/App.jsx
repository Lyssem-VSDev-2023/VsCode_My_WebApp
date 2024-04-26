import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./roots/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./roots/contact";
import EditContact, { action as editAction } from "./roots/edit";
import { action as destroyAction } from "./roots/destroy";
import Index from "./roots";
import { action as contactAction } from "./roots/contact";

function App() {
  const router2 = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      //Children will allow to next a sub-page in the layout
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Index /> },

            {
              path: "contacts/:contactId",
              element: <Contact />,
              loader: contactLoader,
              action: contactAction,
            },
            {
              path: "contacts/:contactId/edit",
              element: <EditContact />,
              loader: contactLoader,
              action: editAction,
            },
            {
              path: "contacts/:contactId/destroy",
              action: destroyAction,
              errorElement: <div>Oops! There was an error when deleting.</div>,
            },
          ],
        },
      ],
    },
    // This will render in a completely blank new page
    // {
    //   path: "contacts/:contactId",
    //   element: <Contact></Contact>,
    // },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        loader={rootLoader}
        action={rootAction}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="contacts/:contactId"
            element={<Contact />}
            loader={contactLoader}
            action={contactAction}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={contactLoader}
            action={editAction}
          />
          <Route path="contacts/:contactId/destroy" action={destroyAction} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
