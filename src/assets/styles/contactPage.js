const { makeStyles } = require("@material-ui/core");

export const useStylesContact =  makeStyles((theme) => ({
  middle : {
    position :'absolute',
    top : '50%',
    transform : 'translateY(-50%)',
    width : '100%',
    textAlign : 'center'
  },
  btn : {
    display : 'inline-block',
    width : 80,
    height : 80,
    backgroundColor : '#f1f1f1',
    margin : 10,
    borderRadius : '30%',
    boxShadow : '0 5px 15px -5px #000070',
    color : '#3498db',
    OverflowEvent : 'hidden',
    position: "relative",
    '&::before ' : {
      content : ' ',
      position : 'absolute',
      width : '120%',
      height : '120%',
      backgroundColor : '#349db',
      transform : 'rotate(45deg)',
      left : '-110%',
      top : '90%'
    },
    '&:hover::before' : {
      animation : 'aaa 0.7s 1',
      top : '-10%',
      left : '-10%',
      backgroundColor : '#349db'
    }
    
  },
  icon : {
    lineHeight :80,
    fontSize : 56,
    transition : '0.2s linear',
    '&:hover ' : {
      transform : 'scale(1.3)',
      color : '#667EEA',
    }
  },
  title : {
    fontWeight : 'bold',
    color : '#4299E1',
    marginBottom : 12 
  },
  subTitle : {
    color : '#2C5282',
    marginBottom : 32 
  }
}))