const calendarButton = document.querySelector('.btn-createCalendar');
const calendarContainer = document.querySelector('.container');

const calendarDays = 12;

// picturePath from function below will be passed into this funcion (as "path"):
const openWindow = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`;
  event.target.style.opacity = '0';
  event.target.style.backgroundColor = '';
};

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarWindow = document.createElement('div');
    const calendarWindowText = document.createElement('div');

    calendarWindow.classList.add('image');
    calendarWindow.style.gridArea = 'window' + (i + 1);
    calendarContainer.appendChild(calendarWindow);

    calendarWindowText.classList.add('text');
    calendarWindowText.innerHTML = i + 1;
    calendarWindow.appendChild(calendarWindowText);

    pictureNumber = i + 1;
    let picturePath = `./pictures/pic-${pictureNumber}.jpeg`;

    calendarWindowText.addEventListener(
      'click',
      openWindow.bind(null, picturePath)
    );
    // with bind() you can pass the information down here to the function outside this function.
  }
};

calendarButton.addEventListener('click', createCalendar);
