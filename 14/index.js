//14.	Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
//      который разрешается с данными об изображении, когда оно загружено.


const loadImageData = url => {
    return new Promise((resolve, reject) => {
      const image = new Image();
  
      image.onload = () => {
        const imageData = {
          width: image.width,
          height: image.height,
          src: url,
          imageElement: image
        };
        //Когда изображение загружается, промис разрешается с данными об изображении
        resolve(imageData);
      };
  
      image.onerror = (error) => {
        reject(error);
      };
  
      image.src = url;
    });
  }
  
  // Пример 
  const imageUrl = 'https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg';
  loadImageData(imageUrl)
    .then((imageData) => {
      console.log(imageData);
    })
    .catch((error) => {
      console.error('Ошибка загрузки изображения:', error);
    });