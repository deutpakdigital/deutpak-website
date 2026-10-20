"use client";

import Link from "@/components/RouterLink";
const InnerHeader = r => <>
    <section className="breadcrumb-area text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 align-self-center">
            <div className="breadcrumb-inner">
              <h1 className="page-title">{r.title}</h1>
              <ul className="page-list breadcrumb">
                <li className="breadcrumb-item">
                  {(() => {
                  switch (r.head) {
                    case "Services":
                      return <Link to="/services">{r.head}</Link>;
                    case "Dienstleistungen":
                      return <Link to="/services">{r.head}</Link>;
                    case "Produkte":
                      return <Link to="/products">{r.head}</Link>;
                    case "Products":
                      return <Link to="/products">{r.head}</Link>;
                    case "Blogs":
                      return <Link to="/blogs">{r.head}</Link>;
                    default:
                      return <Link to="/">{r.head}</Link>;
                  }
                })()}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {r.title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;

export { InnerHeader };
