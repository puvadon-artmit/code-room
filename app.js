// ข้อมูลของแฮร์รี่ พอตเตอร์
const characters = [
    {
      name: 'Harry Potter',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/09/12/17/potter.jpg',
      description: 'รายละเอียดของ Harry Potter...'
    },
    // เพิ่มตัวละครเพิ่มเติมตรงนี้
  ];
  
  // สร้าง HTML เพื่อแสดงข้อมูลของแต่ละตัวละคร
  function createCharacterElement(character) {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
  
    const image = document.createElement('img');
    image.src = character.image;
    const name = document.createElement('h2');
    name.textContent = character.name;
    const description = document.createElement('p');
    description.textContent = character.description;
  
    characterElement.appendChild(image);
    characterElement.appendChild(name);
    characterElement.appendChild(description);
  
    return characterElement;
  }
  
  // แสดงข้อมูลแต่ละตัวละครในหน้าเว็บ
  const characterListElement = document.getElementById('character-list');
  characters.forEach(character => {
    const characterElement = createCharacterElement(character);
    characterListElement.appendChild(characterElement);
  });
  