class Sequence{

  constructor(items){

    this.list = Array();
    if(Array.isArray(items))
    {
      for (var i = 0; i < items.length; i++)
      {
        this.list[i] = items[i]
      }
          //console.log(this.list)
    }
    else if(typeof items == "string")
    {
      for (var i = 0; i < items.length; i++)
      {
        this.list.push( items[i] )
      }
    }
      this.size = this.list.length
      this.left = this.gen_left()
      this.right = this.gen_right()

  }

  copy_s(list)
  {
    let t = [this.size]
    for (var i = 0; i < this.size; i++) {
      t[i] = list[i];
    }
    return t;
  }

  copy_s_range(list,start,end)
  {
    if(start > end)
      return []

    let t = [end - start]
    for (var i = start, j = 0; i < list.length && i < end; i++, j++) {
      t[j] = list[i]
    }
    return t;
  }

  create_n_group_elements_from_set(item, groups,start)
  {
    if(groups == 0)
      return []

    let t = []
    for (var i = start, m = 0; i < item.length ; i += groups, m++)
    {
      t[m] = this.copy_s_range(item,i, i + groups)
    }
    return t;
  }

  gen_left(){
    let t = []
    for (var i = 0; i < this.size; i++)
    {
      t[i] = this.copy_s_range(this.list, 0, i + 1)
    }

    return t
  }

  gen_right(){
    let t = []
    let g = 1
    for (var i = 0; i < this.size - 1; i++)
    {
      t[i] = this.copy_s_range(this.list,i + 1, this.size)
    }

    return t
  }


  showStats(){
    console.log(this.ToString(), "size:", this.size, "p: ", this.partitions)
  }

  ToString()
  {
      let t = '{ '
      let i = 0

      for (; i < this.size - 1; i++)
      {
        t += this.list[i] + ", "
      }

      t += this.list[i] + " }"

      return t
  }


}
