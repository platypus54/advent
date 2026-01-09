let nList = ['101','123123123']

main(nList)

function main(k)
{
  sumnum = 0;
  for (var i = 0; i < k.length; i++) {
    if( g(k[i]) )
      sumnum += Number(k[i])
  }
  console.log(sumnum)
}

function g(strNumber)
{

  if(!strNumber )
    return false;

  let idSize = strNumber.length;

  if(idSize == 1)
    return true

  document.write('<div>')
  document.write('<h1> NUMBER:\t', strNumber, '</h1>')


  n = idSize - 1 // size decreases
  x = 1; // how many groups - increases (right side)
  i = 0
  sl = ''

  while(n / x > 0)
  {

      p = Math.floor( n / x )
      r = n - p * x
      sl += strNumber[i]
      sr = ''
      size = 0
      j = i + 1
      k = p * n
      y = 0

      document.writeln('<table>',

                         '<tr>',
                         '<th> left: </th>',
                         '<td>', sl, '</td>',
                         '<th> left size: </th>',
                         '<td>', idSize - n, '</td>',
                         '</tr>',

                         '<th> groups: </th>',
                         '<td>', x, '</td>',

                         '<th> partitions: </th>',
                         '<td>', p, '</td>',

                         '<th> residuals: </th>',
                         '<td>', r, '</td>'
                      )



      while(p > 0 && j < k)
      {
          if(size < x)
          {
            sr += strNumber[j++]
            size++
          }
          else
          {
            console.log('SEQ:', sl ,'==', sr)

            if(sl == sr)
              y++

            document.writeln(

                               '<tr>',
                               '<th> left: </th>',
                               '<td>', sl, '</td>',
                               '<th> right: </th>',
                               '<td>', sr, '</td>',
                               '<th> match: </th>',
                               '<td>', sl == sr , '</td>',
                               '</tr>'
                      )


            p--
            sr = String()
            size = 0
          }
      }
      document.write(
                                  '<tr>',
                                  '<th> final p: </th>',
                                  '<td>', p, '</td>',

                                  '<th> y: </th>',
                                  '<td>', y, '</td>',

                                  '<th> x: </th>',
                                  '<td>', x, '</td>',

                                  '<th> P: </th>',
                                  '<td>', Math.floor(n  / x), '</td>',

                                  '<th> P: </th>',
                                  '<td>', y > 1 && y == Math.floor(n  / x), '</td>',

                                  '</tr>',
                                  '</table><br>'

      )

      if( y > 1 && y == Math.floor(n  / x) )
        return true

      i++;  n--;  x++;
  }
  document.writeln('</div>')
  return false;
}
