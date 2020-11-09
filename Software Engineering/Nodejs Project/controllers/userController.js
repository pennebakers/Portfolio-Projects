const User = require( '../models/User' );


exports.getAllUsers = ( req, res ) => {
  User.find( {} )
    .exec()
    .then( ( users ) => {
      res.render( 'users', {
        allUsers: users
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'promise complete' );
    } );
};

function getGPA(req){
  var name = req.body.name;
  var one = req.body.csc141;
  //console.log('one = ' + one);
  var two = req.body.csc142;
  var three = req.body.csc240;
  var four = req.body.csc241;
  var t1 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(one);
  //console.log('match one = ' + one.match(/^[a-dfA-DF]{1,1}[\-\+]{0,1}$/))
  //console.log('t1 = ' + t1);
  var t2 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(two);
  //console.log('t2 = ' + t2);
  var t3 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(three);
  //console.log('t3 = ' + t3);
  var t4 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(four);
  //console.log('t4 = ' + t4);
  var t5 = /^[a-zA-Z]{0,99}[\s]{0,1}[a-zA-Z]{0,99}$/.test(name);
  //console.log('tried to stringify one = ' + one);
  //console.log('in here');
  var realgpa;
  var grades = {
    'A': 4.0,
    'A+': 4.0,
    'A-': 3.67,
    'B+': 3.33,
    'B': 3.0,
    'B-': 2.67,
    'C+': 2.33,
    'C': 2.0,
    'C-': 1.67,
    'D+': 1.33,
    'D': 1.00,
    'D-': 0.67,
    'F': 0,
    'F-': 0,
    'F+': 0
  };
  //var test = "a"
  //console.log('test = ' + test);
  if(t1 == true && t2 == true && t3 == true && t4 == true && t5 == true){
        thegpa = parseFloat(grades[(req.body.csc141).toUpperCase()]);
        //console.log('grades[A] = ' + grades[test.toUpperCase()]);
        //console.log('grades[req.body.csc141] = ' + grades[(req.body.csc141).toUpperCase()])
        thegpa = parseFloat(thegpa + grades[(req.body.csc142).toUpperCase()]);
        thegpa = parseFloat(thegpa + grades[(req.body.csc240).toUpperCase()]);
        thegpa = parseFloat(thegpa + grades[(req.body.csc241).toUpperCase()]);
        thegpa = parseFloat(thegpa / 4);
        //console.log('realgpa = ' + thegpa.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0]);
        realgpa = thegpa.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0];
        realgpa = parseFloat(realgpa).toFixed(1);
  }else{
    realgpa = "x"
    console.log('bad input')
  }
  return realgpa
}
exports.getUserPage = ( req, res ) => {
  res.render( 'newUsers' )
};

exports.saveUser = ( req, res ) => {
  let newUser = new User( {
    name: req.body.name,
    csc141: req.body.csc141,
    csc142: req.body.csc142,
    csc240: req.body.csc240,
    csc241: req.body.csc241, 
    gpa: getGPA(req)
  } );
  if(newUser.gpa >= 2.5){
    newUser.save()
    .then( (result) => {
      res.render( 'thanks', {
        allUsers: result,
        gpa: newUser.gpa,
        name: newUser.name
      });
    } )
    .catch( error => {
      res.send( error );
    } );
  }else if(newUser.gpa >= 0){
    res.render( 'nexttime', {gpa: newUser.gpa, name: newUser.name});
  }else{
    //console.log('got to else')
    res.render( 'tryagain' );
  }
};
