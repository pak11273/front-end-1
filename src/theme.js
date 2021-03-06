/// global theme styling page
///can't figure out how to maek the error lines go away, it works regardless but is annoying

const theme = {
  // working color directory
  brand: "rgb(31, 24, 21)",
  primaryColor: "#64817D",
  secondaryColor: "#C8DBDE",
  tertiaryColor: "rgb(200 88 40)",
  darkestColor: "#322939",
  lightestColor: "#ffd9c6",
  errorColor: "#ED462F",

  //general display format
  display: "flex",
  flexWrap: "wrap",

  //general padding
  padding: {
    backgroundPadding: "10%",
    formPadding: "10%",
    titlePadding: "5vh 18vh",
  },
  // input stylings
  input: {},
  //font directory
  fontSize: {
    //error font size
    small: "0.5em",
    //form input prompt font size
    medium: "1.7em",
    //title font size
    large: "4em",
  },
  fontFamily: "Source Sans Pro, Helvetica, sans-serif",
  fontWeight: "300",
  //prevents line breaks (specifically for log in button)
  whiteSpace: "nowrap",
};

export default theme;
