const personName = [
  {
    name: "Andrea",
    favFoods: ["N/A"],
    birthYear: 2001,
    photo: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/119037233_1692799567541511_275029582047570603_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=iIZ2T8zY7qcAX_llE33&_nc_ht=scontent.fmnl4-5.fna&oh=1d5f789e6fd391443f27e4a5fa1a2427&oe=5FBBF71D"
  },
  {
    name: "Melrose",
    favFoods: ["N/A"],
    birthYear: 2001,
    photo: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/103609752_2059387057533687_3468799381833699441_n.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=u7s0ul3z6ywAX8FJN4I&_nc_ht=scontent.fmnl4-1.fna&oh=d757e9c5f9c393aefae05efe99bd1b9b&oe=5FBA87DE"
  },
  {
    name: "Shaina",
    favFoods: ["N/A"],
    birthYear: 2001,
    photo: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/87988199_1329325897274586_2349864190614700032_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=0HdM7meaLIQAX8NrQ37&_nc_ht=scontent.fmnl4-1.fna&oh=bb8b69b9e374377cb58d1a113afd162c&oe=5FBEE76F"
  }
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 year old";
  } else if (calculatedAge == 0) {
    return "Baby";
  } else {
    return `${calculatedAge} years old`;
  }
}

function personTemplate(person) {
  return `
    <div class="container">
    <button id="edit" class="right">Edit</button><button id="save" style="display: none;" class="right">Save</button>
    <img class="personPhoto" src="${person.photo}"> 
    <h2 class="personName">${person.name}</h2>
    <p class="test"><strong>Age:</strong> ${age(person.birthYear)}</p>
    <h4>Favorite Foods</h4><ul class="favFoods data"><li>${person.favFoods}</li></ul>
    </div>
  `;
}

$(document).on('click', 'button#edit', function(event) 
{
  event.preventDefault();
  var edit = $(this).closest('div');

  edit.find('#save').show();

  edit.find('#edit').hide(); 

  edit.find('.data')
  .attr('contenteditable', 'true');
});

$(document).on('click', 'button#save', function(event) 
{
  event.preventDefault();
  var save = $(this).closest('div');

  save.find('#edit').show();

  save.find('#save').hide(); 

  save.find('.data')
  .removeAttr('contenteditable', 'true');
});

document.getElementById("display").innerHTML = `
  <h1 class="title" style="color: white;">Person (${personName.length} results)</h1>
  ${personName.map(personTemplate).join("")}
  <p class="footer">These ${personName.length} people were added recently. Check back soon for updates.</p>
`;
