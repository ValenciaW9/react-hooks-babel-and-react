const name = (
    <div>
      <img src="avatar.png" className="profile" />
      <h3>{[user.firstName, user.lastName].join("")}</h3>
    </div>
  );

//When the above is run through Babel, we receive the following executable code

const profile = React.createElement(
    "div",
    null,
    React.createElement("img", { src: "avatar.png", className: "profile"}),
    React.createElement("h3",null, [user.firstName, user.lastName].join(""))
);