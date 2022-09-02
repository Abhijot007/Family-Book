var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg, https://i.postimg.cc/T1nXtjdt/image.jpg, https://i.postimg.cc/1z4hk1Rn/image.jpg, https://i.postimg.cc/CLwtypmh/image.jpg, https://i.postimg.cc/Twq9Qp8r/image.jpg"];
var names = ["Family Book","Father", "Mother", "Me", "Brother",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
