class Flight {
  contructor() {
    //800x600
    this.laneEdgeCornerX = 100;
    this.laneEdgeCornerY = 100;
    this.laneEdgeCornerX2 = 700;
    this.laneEdgeCornerY2 = 500;
    this.pos = createVector(this.laneEdgeCornerX, (this.laneEdgeCornerY - this.laneEdgeCornerY2) / 2);
    this.time = 0;
  }

  calc_position() {
    /*
    Muligvis del den op i 4 dele
    Bør have en timer som kører, hvor flyet hastighed ganges på som en konstant
    */
  }

  move_fligt() {
    /*
    Vis fly på dens position
    */
  }
}
