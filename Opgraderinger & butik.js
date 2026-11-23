class Butik{
constructor(){
this.bredde=40;
this.højde=20;

}

butik() {

  rect(width-this.bredde,0,this.bredde,this.højde);
 
  

}


opgraderinger() {



}

klik() {
  if(mouseX>width-this.bredde && mouseX<width && mouseY>0 && mouseY<this.højde){
    console.log("det virker")
  }
  console.log("  ")

}
}

