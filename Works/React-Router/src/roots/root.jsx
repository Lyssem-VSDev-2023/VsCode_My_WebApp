import {
  Outlet,
  NavLink,
  Link,
  useNavigation,
  useLoaderData,
  Form,
  redirect,
  useSubmit,
} from "react-router-dom";

import { getContacts, createContact } from "../Contact";
import { useEffect } from "react";
import FloatActionButton from "../../../../src/Components/FloatActionButton/FloatActionButton";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  //return { contact };
  return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  function onclick() {
    window.location.replace("/");
  }

  return (
    <>
      <FloatActionButton onClick={onclick}></FloatActionButton>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              className={searching ? "loading" : ""}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {/* <ul>
             <li> */}
          {/* <a href={`/contacts/1`}>Your Name</a> */}
          {/* <a> will reload the page, use Link instead */}
          {/* <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li> */}
          {/* <a href={`/contacts/2`}>Your Friend</a> */}
          {/* <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul> */}
          {/* Dynamic URL parameters detection and linking  */}
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  {/* <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link> */}
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        {/* Allow the nested pages */}
        <Outlet />
      </div>
    </>
  );
}
