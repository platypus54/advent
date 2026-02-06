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

  equal(l,r){
    if(l.length == r.length)

      for (var i = 0; i < l.length; i++) {
        if(l[i] != r[i])
          return false

      }else {
        return false
      }

      return true
  }

  equal(r){
    if(this.size == r.length)

      for (var i = 0; i < this.size; i++) {
        if(this.list[i] != r[i])
          return false

      }else {
        return false
      }

      return true
  }

  copy_s(list)
  {
    let t = new Array(this.size)
    for (var i = 0; i < this.size; i++) {
      t[i] = list[i];
    }
    return t;
  }

  copy_s_range(list,start,end)
  {
    if(start > end)
      return []

    let t = new Array(end - start)
    for (var i = start, j = 0; i < list.length && i < end; i++, j++) {
      t[j] = list[i]
    }
    return t;
  }

  create_n_group_elements_from_set(item, groups,start)
  {
    let t = []
    for (var i = start, m = 0; i + groups < item.length; i += groups, m++)
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
    let f = []

    for (var i = 0; i < this.size - 1; i++)
    {
      t[i] = this.copy_s_range(this.list,i + 1, this.size)
    }

    for (var i = 0; i < t.length; i++)
    {
      f[i] = this.create_n_group_elements_from_set(t[i],i + 1,0)
    }

    return f
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
