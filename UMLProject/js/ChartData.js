class ChartData{
  constructor(x_lbl, x_array, y_lbl, y_array)
  {
    this.x_lbl = x_lbl;
    this.x_array = x_array;
    this.y_lbl = y_lbl;
    this.y_array = y_array;
  }

  getXLabel()
  {
    return this.x_lbl;
  }

  getYLabel()
  {
    return this.y_lbl;
  }

  getXArray()
  {
    return this.x_array;
  }

  getYArray()
  {
    return this.y_array;
  }
}
