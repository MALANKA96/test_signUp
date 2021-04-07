export const PasswordСomplexity = ({ scoreСomplexityPassword }) => {
  //component that returns the password complexity slider
  let strColor; 
  let strWidth;

  switch (scoreСomplexityPassword) {
    case 1: // level complexity 1
      strColor = "red";
      strWidth = "25%";
      break; 
    case 2: // level complexity 2
      strColor = "orange";
      strWidth = "50%";
      break;
    case 3: // level complexity 3
      strColor = "yellow";
      strWidth = "75%";
      break;
    case 4: // level complexity 4
      strColor = "#5cff47";
      strWidth = "100%";
      break;
    default:
  }

  const styleСomplexityPassword = {
    backgroundColor: strColor,
    height: "5px",
    marginTop: "10px",
    width: strWidth,
    transition: "all 300ms ease-in-out",
  }; 

  return <div style={styleСomplexityPassword}> </div>;
};

