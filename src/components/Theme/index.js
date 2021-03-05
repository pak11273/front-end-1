/// global theme styling page
///can't figure out how to maek the error lines go away, it works regardless but is annoying
 
export default {
  // working color directory
    fontColor: '#292728',
    primaryColor: '#64817D',
    secondaryColor: '#C8DBDE',
    tertiaryColor: '#CF843E',
    darkestColor: '#322939',
    lightestColor: '#EFEFEB',
    errorColor: '#ED462F',

  //general display format
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderRadius: '10px',

  //general padding
    padding: {
        backgroundPadding: '10%',
        formPadding: '10%',
        buttonPadding: '2vh 10vh',
        titlePadding: '5vh 18vh',
    },
  //general margin
    margin: {
        button: '10%',

    },
  // input stylings
    input :{
        height: '40px',
        width: '160px',
        borderRadius: '10px',
    },
  //font directory 
    fontSize: {
        //error font size
        small: '0.5em',
        //form input prompt font size
        medium: '1.7em',
        //title font size
        large: '4em',
        button: '1.5em',
    },
    fontFamily: 'arial',
    fontWeight: '300',
    //prevents line breaks (specifically for log in button)
    whiteSpace: 'nowrap',

 }
 
 