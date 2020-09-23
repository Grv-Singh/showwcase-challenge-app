import React from "react";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  className: string;
}

const Layout: React.FC<Props> = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  const url =
    "https://static.wixstatic.com/media/553d6a_6c7304f930724f46a47a88893ae7bb59~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_4.00_1.00_0.00/Logo%20(20).webp";

  return (
    <div style={{ height: "100vh" }}>
      <div className="logo">
        <h2>
          <img alt="logo" src={url} style={{ width: 35, height: 35 }} /> {title}
        </h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
