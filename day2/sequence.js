// "sequence"
class Sequence{

  constructor(items){

    this.list = Array();

    if(Array.isArray(items))
    {
      for (var i = 0; i < items.length; i++)
      {
        this.list[i] = items[i]
      }
    }
    else if(typeof items == "string")
    {
      for (var i = 0; i < items.length; i++)
      {
        this.list.push( items[i] )
      }
    }
      this.size = this.list.length
      this.partitions = this.gen_partitions(this.size);
      this.left = [];
      this.right = [];

  }

  gen_partitions(n){
    t = Array(n);

    for(let m = 0; m < n; m++)
    {
      t[n - (m + 1) ] = new Pair(m + 1 ,n / (m + 1) )
    }
    return t
  }


  gen_left(){
    for (var i = 0; i < this.size; i++) {
      this.list.[i]
    }
  }

  showStats(){
    console.log(this.ToString(), "size:", this.size, "p: ", this.partitions)
  }

  ToString()
  {
      t = '{ '
      let i = 0

      for (; i < this.size - 1; i++)
      {
        t += this.list[i] + ", "
      }

      t += this.list[i] + " }"

      return t
  }


}
