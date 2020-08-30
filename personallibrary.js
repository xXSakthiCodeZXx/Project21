function isTouching(ob1,ob2) {
    if(ob2.x - ob1.x < ob2.width/2 + ob1.width/2) { 

       return true;
    }
    else {

      return false;
    }
    
}